"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                        <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Authentication Disabled</CardTitle>
                    <CardDescription>
                        Sign-in is currently disabled for this demo site.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm">
                        This site contains interactive reports and tools that are publicly accessible without authentication.
                    </p>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                    <Button asChild className="w-full">
                        <Link href="/">
                            View Reports
                        </Link>
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                        Want to create an account?{" "}
                        <Link href="/sign-up" className="font-medium text-primary hover:underline">
                            Sign up
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
