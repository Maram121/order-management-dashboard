import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Tuniform</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Your comprehensive order management solution. Navigate to the Dashboard to view and manage your orders.
        </p>
      </div>

    
      <div className="flex items-center justify-center">
        <div className="relative">
         <Image
  src="https://tuniform.tn/src/img/logo_with_background.png"
  alt="Tuniform Logo"
  width={200}
  height={200}
  className="rounded-lg shadow-lg"
  priority
/>

        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-500">Get started by exploring your dashboard and managing orders efficiently.</p>
      </div>
    </div>
  )
}
