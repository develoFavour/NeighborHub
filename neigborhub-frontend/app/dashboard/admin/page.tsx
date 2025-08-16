import { ProtectedRoute } from "@/components/protected-route";
import { AdminDashboard } from "@/components/dashboard/admin-dashboard";

export default function AdminDashboardPage() {
	return (
		<ProtectedRoute requiredRole="admin">
			<AdminDashboard />
		</ProtectedRoute>
	);
}
