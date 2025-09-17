"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function AuthPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const mode = searchParams.get("mode") || "login"

  const supabase = createClientComponentClient()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setError(null)
    setEmail("")
    setPassword("")
  }, [mode])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
      } else {
        // Sign up user
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        })
        if (error) throw error

        // Create profile row for this new user
        if (data.user) {
          const { error: profileError } = await supabase.from("profiles").insert([
            { id: data.user.id, role: "customer", email: data.user.email } // default role
          ])
          if (profileError) throw profileError
        }
      }

      router.push("/")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            {mode === "login" ? "Login" : "Register"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading
                ? mode === "login" ? "Logging in..." : "Registering..."
                : mode === "login" ? "Login" : "Register"}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            {mode === "login" ? (
              <p>
                Don’t have an account?{" "}
                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold"
                  onClick={() => router.push("/auth?mode=register")}
                >
                  Register
                </Button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold"
                  onClick={() => router.push("/auth?mode=login")}
                >
                  Login
                </Button>
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
