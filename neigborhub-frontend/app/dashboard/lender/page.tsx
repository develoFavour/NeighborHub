import { ProtectedRoute } from "@/components/protected-route";
import { LenderDashboard } from "@/components/dashboard/lender-dashboard";

export default function LenderDashboardPage() {
	return (
		<ProtectedRoute requiredRole="lender">
			<LenderDashboard />
		</ProtectedRoute>
	);
}
