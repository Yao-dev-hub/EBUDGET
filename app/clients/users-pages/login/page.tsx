import Link from 'next/link';
import GmailConnection from '@/components/GmailConnection';
import LoginForm from './LoginForm';

function Page() {
    return (
        <main className='container-fluid'>
            <div className=" d-flex row align-items-center">
                <div className="col-12 col-lg-6 bg-image-login d-none d-lg-block">
                    <div className="row d-flex justify-content-center align-items-center w-100 p-2 h-100 ">
                        <div className="col-md-8 text-center">
                            <h1 className='h2'>Se connecter à votre compte</h1>
                            <p className='text-center fs-6'>Entrez votre e-mail et votre mot de passe pour accéder à votre espace personnel et profiter de toutes les fonctionnalités de notre plateforme.</p>
                            <div className="mt-4">
                                <Link className="btn btn-primary" href="/clients/users-pages/sign-up">S'inscrire</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="bg-mobile-login">
                        <div className='row justify-content-center'>
                            <div className="col-lg-8">
                                <div className="mb-3 text-center">
                                    <GmailConnection />
                                </div>
                                <p className='mb-3 color-white text-center'>- ou - </p>
                                <LoginForm />
                                <div className="d-flex justify-content-between my-3 text-decoration-none">
                                    <span className='color-white'>pas encore de compte ?</span> <Link href="/clients/users-pages/sign-up" className='text-decoration-none'>Créer un compte</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page