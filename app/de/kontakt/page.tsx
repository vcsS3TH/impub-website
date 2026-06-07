export default function ContactDE() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-blue-900 text-white p-4"><p className="text-2xl font-bold">IMPUB</p></nav>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Kontakt</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
            <p><strong>Name:</strong> Dietrich Weber</p>
            <p><strong>Adresse:</strong> Wurzacher Straße 10, 88339 Bad Waldsee, Deutschland</p>
            <p><strong>Telefon:</strong> +49 7524 9155-100</p>
            <p><strong>Email:</strong> <a href="mailto:info@impub.de" className="text-red-600">info@impub.de</a></p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Kontaktformular</h2>
            <form action="/" className="space-y-4">
              <input type="text" placeholder="Name *" required className="w-full px-4 py-2 border rounded" />
              <input type="email" placeholder="Email *" required className="w-full px-4 py-2 border rounded" />
              <input type="text" placeholder="Betreff *" required className="w-full px-4 py-2 border rounded" />
              <textarea placeholder="Nachricht *" required rows={5} className="w-full px-4 py-2 border rounded"></textarea>
              <button type="submit" className="w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700">Senden</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
