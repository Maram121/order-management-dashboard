export function Footer() {
  return (
    <footer className="border-t bg-background px-10">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by <span className="font-medium underline underline-offset-4">Maram</span>. © 2025 All rights
            reserved.
          </p>
        </div>
        <div className="text-center text-sm text-muted-foreground md:text-right">
          Order Management Dashboard for Tuniform
        </div>
      </div>
    </footer>
  )
}
