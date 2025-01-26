import Link from 'next/link';
import GmailConnection from '@/components/GmailConnection';
import LoginForm from './LoginForm';

function Page() {
    return (
        <main className='container-fluid'>
            <div className=" d-flex row align-items-center">
                <div className="col-md-6 bg-image-login d-none d-lg-block">
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
                <div className="col-md-6">
                    <div className="row d-flex justify-content-center bg-mobile-login">
                        <div className="col-md-8 ">
                            <div className="mb-3 text-center">
                                <GmailConnection />
                            </div>
                            <p className='mb-3 text-muted text-center'>- ou - </p>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page