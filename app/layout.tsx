import "bootstrap/dist/css/bootstrap.css"
import "@/css/style.css"
import NavBar from "@/components/navBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        <NavBar />
        {children}
        <script defer src="https://www.google.com/recaptcha/api.js?render=6Lf1pbwqAAAAAD4D9dvpJyqlGH9kAO_jntaPQ3-m"></script>
      </body>
    </html>
  );
}
