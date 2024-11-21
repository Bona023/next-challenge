import "../globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="flex flex-col items-center">
                <div className="h-4 w-full bg-gradient-to-r from-indigo-600 via-emerald-200 to-indigo-600"></div>
                {children}
            </body>
        </html>
    );
}
