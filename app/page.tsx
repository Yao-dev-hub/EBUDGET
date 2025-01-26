import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container-fluid bg-primary d-flex align-items-center justify-content-center" id="container-home">
      <div className="row align-items-center justify-content-center ">
        <div className="col-md-10">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h6 className="fw-bold my-2 text-white"><span className="text-warning">e</span>Budget</h6>
              <h1 id="Grand_titre" className="mb-3 text-white fw-bold">Gérez votre argent intelligemment</h1>
              <p className="text-white">Prenez le contrôle de votre budget, l'application qui vous aide à suivre vos revenus et dépenses en toute simplicité. <br /> Visualisez vos transactions, fixez des objectifs d’épargne et optimisez vos finances en quelques clics</p>
              <Link href="/clients/users-pages/login/" className="btn btn-warning mb-3">Se connecter</Link>
              <Link href="/clients/users-pages/sign-up/" className="btn btn-dark ms-2 mb-3">Créer un compte</Link>
              <p className="p-2 border-white rounded-3 border text-center text-white">eBudget : Votre argent, votre maîtrise !</p>
            </div>
            <div className="col-md-6 rounded-5 ">
              <Image src="/images/afrique-du-sud-monnaie.jpg" layout="responsive" width={100} height={100} className="img-fluid rounded-5" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
