import './styles.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zenify - Admin Panel',
  description: 'Manage your Website.',
}

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    {children}
  </>
}
