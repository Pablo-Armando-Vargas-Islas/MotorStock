import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcryptjs';
import { prisma } from './prisma';
import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { user: credentials.username },
        });

        if (!user) return null;

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) return null;

        return {
          id: user.id,
          name: user.user,
          role: user.role,
          canViewSeguros: user.canViewSeguros,
          canViewGastos: user.canViewGastos,
          canViewFacturas: user.canViewFacturas,
          canEditSeguros: user.canEditSeguros,
          canEditGastos: user.canEditGastos,
          canEditFacturas: user.canEditFacturas,
          canManageUsers: user.canManageUsers,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.canViewSeguros = (user as any).canViewSeguros;
        token.canViewGastos = (user as any).canViewGastos;
        token.canViewFacturas = (user as any).canViewFacturas;
        token.canEditSeguros = (user as any).canEditSeguros;
        token.canEditGastos = (user as any).canEditGastos;
        token.canEditFacturas = (user as any).canEditFacturas;
        token.canManageUsers = (user as any).canManageUsers;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).id = token.sub;
        (session.user as any).role = token.role;
        (session.user as any).canViewSeguros = token.canViewSeguros;
        (session.user as any).canViewGastos = token.canViewGastos;
        (session.user as any).canViewFacturas = token.canViewFacturas;
        (session.user as any).canEditSeguros = token.canEditSeguros;
        (session.user as any).canEditGastos = token.canEditGastos;
        (session.user as any).canEditFacturas = token.canEditFacturas;
        (session.user as any).canManageUsers = token.canManageUsers;
      }
      return session;
    },
  },
  pages: {
    signIn: '/',
  },
};
