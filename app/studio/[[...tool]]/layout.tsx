export const metadata = {
  title: 'WagerBird Studio',
  description: 'Content management for WagerBird',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
