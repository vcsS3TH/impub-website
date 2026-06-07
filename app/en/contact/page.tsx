export default function ContactEN() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-blue-900 text-white p-4"><p className="text-2xl font-bold">IMPUB</p></nav>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p><strong>Name:</strong> Dietrich Weber</p>
            <p><strong>Address:</strong> Wurzacher Straße 10, 88339 Bad Waldsee, Germany</p>
            <p><strong>Phone:</strong> +49 7524 9155-100</p>
            <p><strong>Email:</strong> <a href="mailto:info@impub.de" className="text-red-600">info@impub.de</a></p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
            <form action="/" className="space-y-4">
              <input type="text" placeholder="Name *" required className="w-full px-4 py-2 border rounded" />
              <input type="email" placeholder="Email *" required className="w-full px-4 py-2 border rounded" />
              <input type="text" placeholder="Subject *" required className="w-full px-4 py-2 border rounded" />
              <textarea placeholder="Message *" required rows={5} className="w-full px-4 py-2 border rounded"></textarea>
              <button type="submit" className="w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700">Send</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
