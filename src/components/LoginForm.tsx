'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader2, Eye, EyeOff } from 'lucide-react'; 

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });
    setLoading(false);

    if (res?.error) {
      setError('Credenciales incorrectas');
    } else {
      router.push('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Usuario</label>
        <input
          type="text"
          placeholder="Ingresa tu usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border rounded-lg p-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-2 relative">
        <label className="text-sm font-medium">Contraseña</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border rounded-lg p-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <button
        type="submit"
        className="w-full flex justify-center items-center gap-2 bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/90 transition"
        disabled={loading}
      >
        {loading ? (
          <Loader2 className="animate-spin h-5 w-5" />
        ) : (
          "Iniciar Sesión"
        )}
      </button>
    </form>
  );
}
