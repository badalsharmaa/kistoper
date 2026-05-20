export default function Rewards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Rewards Program</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
        <h2 className="text-2xl font-bold text-brand-600 mb-2">0 Points</h2>
        <p className="text-gray-500 mb-6">Sign in to start earning points on every purchase.</p>
        <button className="bg-brand-900 text-white px-6 py-2 rounded-full font-medium hover:bg-brand-800 transition-colors">
          Sign In / Register
        </button>
      </div>
    </div>
  );
}
