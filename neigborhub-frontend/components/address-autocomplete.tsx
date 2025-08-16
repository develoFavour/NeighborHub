"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { MapPin, Loader2 } from "lucide-react";

interface AddressResult {
	display_name: string;
	lat: string;
	lon: string;
	place_id: string;
}

interface LocationData {
	address: string;
	latitude: number;
	longitude: number;
}

interface AddressAutocompleteProps {
	onLocationSelect: (location: LocationData) => void;
	placeholder?: string;
	className?: string;
}

export function AddressAutocomplete({
	onLocationSelect,
	placeholder = "Enter your address...",
	className = "",
}: AddressAutocompleteProps) {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<AddressResult[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [showResults, setShowResults] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const debounceRef = useRef<NodeJS.Timeout | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	// Search addresses using Nominatim (OpenStreetMap)
	const searchAddresses = async (searchQuery: string) => {
		if (searchQuery.length < 3) {
			setResults([]);
			return;
		}

		setIsLoading(true);
		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
					searchQuery
				)}&limit=5&addressdetails=1`
			);
			const data = await response.json();
			setResults(data);
			setShowResults(true);
		} catch (error) {
			console.error("Error fetching addresses:", error);
			setResults([]);
		} finally {
			setIsLoading(false);
		}
	};

	// Debounced search
	useEffect(() => {
		if (debounceRef.current) {
			clearTimeout(debounceRef.current);
		}

		debounceRef.current = setTimeout(() => {
			searchAddresses(query);
		}, 300);

		return () => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
		};
	}, [query]);

	// Handle address selection
	const handleSelectAddress = (result: AddressResult) => {
		const locationData: LocationData = {
			address: result.display_name,
			latitude: Number.parseFloat(result.lat),
			longitude: Number.parseFloat(result.lon),
		};

		setQuery(result.display_name);
		setShowResults(false);
		setSelectedIndex(-1);
		onLocationSelect(locationData);
	};

	// Handle keyboard navigation
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (!showResults || results.length === 0) return;

		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();
				setSelectedIndex((prev) =>
					prev < results.length - 1 ? prev + 1 : prev
				);
				break;
			case "ArrowUp":
				e.preventDefault();
				setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
				break;
			case "Enter":
				e.preventDefault();
				if (selectedIndex >= 0) {
					handleSelectAddress(results[selectedIndex]);
				}
				break;
			case "Escape":
				setShowResults(false);
				setSelectedIndex(-1);
				break;
		}
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setShowResults(false);
				setSelectedIndex(-1);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div ref={containerRef} className={`relative ${className}`}>
			<div className="relative">
				<MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder={placeholder}
					className="w-full pl-10 pr-10 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 text-foreground placeholder:text-muted-foreground"
				/>
				{isLoading && (
					<Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 animate-spin" />
				)}
			</div>

			{/* Results dropdown */}
			{showResults && results.length > 0 && (
				<div className="absolute z-50 w-full mt-1 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
					{results.map((result, index) => (
						<button
							key={result.place_id}
							onClick={() => handleSelectAddress(result)}
							className={`w-full text-left px-4 py-3 hover:bg-muted/50 transition-colors duration-150 border-b border-border/50 last:border-b-0 ${
								index === selectedIndex ? "bg-muted/50" : ""
							}`}
						>
							<div className="flex items-start gap-3">
								<MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
								<div className="flex-1 min-w-0">
									<p className="text-sm font-medium text-foreground truncate">
										{result.display_name}
									</p>
								</div>
							</div>
						</button>
					))}
				</div>
			)}

			{/* No results message */}
			{showResults &&
				results.length === 0 &&
				query.length >= 3 &&
				!isLoading && (
					<div className="absolute z-50 w-full mt-1 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-4">
						<p className="text-sm text-muted-foreground text-center">
							No addresses found. Try a different search term.
						</p>
					</div>
				)}
		</div>
	);
}
