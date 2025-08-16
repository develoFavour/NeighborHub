import Image from "next/image";

export function CommunityDashboardPreview() {
	return (
		<div className="w-[calc(100vw-50px)] md:w-[72rem]">
			<div className="bg-primary-light/30 rounded-2xl p-2 shadow-2xl">
				<Image
					src="/assets/neigbor.jpg"
					alt="Community sharing dashboard preview"
					width={900}
					height={540}
					className="w-full h-full object-cover rounded-xl shadow-lg"
				/>
			</div>
		</div>
	);
}
