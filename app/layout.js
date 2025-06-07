import './globals.css';

export const metadata = {
  title: 'My Front-End App',
  description: 'CPAN144 Assignment 1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
