'use client'

import { useEffect, useState } from 'react'
import { supabase, getUser } from '@/lib/supabase'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface Stat {
  label: string
  value: string
  change: string
  positive: boolean
}

interface UsageData {
  name: string
  count: number
}

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState<Stat[]>([])
  const [usageData, setUsageData] = useState<UsageData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const user = await getUser()
        setUser(user)

        // Simulated stats (replace with real Supabase queries)
        setStats([
          { label: 'Total Users', value: '1,234', change: '+12%', positive: true },
          { label: 'Revenue', value: '$12,450', change: '+8%', positive: true },
          { label: 'Churn Rate', value: '2.1%', change: '-0.5%', positive: true },
          { label: 'MRR', value: '$4,200', change: '+15%', positive: true }
        ])

        setUsageData([
          { name: 'Mon', count: 400 },
          { name: 'Tue', count: 300 },
          { name: 'Wed', count: 550 },
          { name: 'Thu', count: 450 },
          { name: 'Fri', count: 600 },
          { name: 'Sat', count: 350 },
          { name: 'Sun', count: 250 }
        ])
      } catch (err) {
        console.error('Failed to load dashboard data:', err)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-muted-foreground">Loading dashboard...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome back, {user?.user_metadata?.full_name || 'User'}!
        </h1>
        <p className="text-muted-foreground">Here's what's happening with your project.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 bg-card rounded-lg border shadow-sm">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
            <p className={`text-sm mt-1 ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="p-6 bg-card rounded-lg border shadow-sm mb-8">
        <h2 className="text-lg font-semibold mb-4">User Activity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={usageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-card rounded-lg border">
          <h3 className="font-semibold mb-2">Invite Team Members</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Add collaborators to work together on your project.
          </p>
          <button className="text-blue-500 text-sm font-medium">
            Manage Invites →
          </button>
        </div>
        <div className="p-6 bg-card rounded-lg border">
          <h3 className="font-semibold mb-2">View Analytics</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Track user engagement and conversion metrics.
          </p>
          <button className="text-blue-500 text-sm font-medium">
            Open Analytics →
          </button>
        </div>
        <div className="p-6 bg-card rounded-lg border">
          <h3 className="font-semibold mb-2">Project Settings</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Configure your project settings and integrations.
          </p>
          <button className="text-blue-500 text-sm font-medium">
            Settings →
          </button>
        </div>
      </div>
    </div>
  )
}
