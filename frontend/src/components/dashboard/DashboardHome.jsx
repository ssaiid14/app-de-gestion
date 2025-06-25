import StatsCard from './StatsCard'
import RecentActivity from './RecentActivity'
import Charts from './Charts'
import AIInsights from './AIInsights'
import { Users, ShoppingCart, BarChart2, DollarSign } from 'lucide-react'

const stats = [
	{
		title: 'Usuarios',
		value: '1,245',
		change: '+5.2%',
		changeType: 'positive',
		icon: Users,
		color: 'blue',
		description: 'Usuarios activos este mes',
	},
	{
		title: 'Ventas',
		value: '€12,430',
		change: '-1.8%',
		changeType: 'negative',
		icon: DollarSign,
		color: 'green',
		description: 'Ingresos totales del mes',
	},
	{
		title: 'Productos',
		value: '320',
		change: '+2.1%',
		changeType: 'positive',
		icon: ShoppingCart,
		color: 'purple',
		description: 'Productos en catálogo',
	},
	{
		title: 'Reportes',
		value: '27',
		change: '0%',
		changeType: 'neutral',
		icon: BarChart2,
		color: 'yellow',
		description: 'Reportes generados',
	},
]

const DashboardHome = () => {
	return (
		<div className="space-y-8 px-2 md:px-6 py-4">
			{/* Título y bienvenida */}
			<div className="mb-4">
				<h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
					Panel de Control
				</h1>
				<p className="text-gray-500 dark:text-gray-400 mt-1">
					¡Bienvenido! Consulta el resumen de tu aplicación y las métricas clave.
				</p>
			</div>

			{/* Stats */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
				{stats.map((stat) => (
					<StatsCard
						key={stat.title}
						title={stat.title}
						value={stat.value}
						change={stat.change}
						changeType={stat.changeType}
						icon={stat.icon}
						color={stat.color}
						description={stat.description}
					/>
				))}
			</div>

			{/* Charts */}
			<section className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
				<h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
					Gráficas de Actividad
				</h2>
				<Charts />
			</section>

			{/* Insights y Actividad */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
					<h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
						Insights de IA
					</h2>
					<AIInsights />
				</section>
				<section className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
					<h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
						Actividad Reciente
					</h2>
					<RecentActivity />
				</section>
			</div>
		</div>
	)
}

export default DashboardHome