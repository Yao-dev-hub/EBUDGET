import SignUpForm from './SignUpForm'
import Link from 'next/link';
import GmailConnection from '@/components/GmailConnection';


function Page() {
    return (
        <>
            <main className='millieu container-fluid'>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 bg-image bg-info d-none d-lg-block">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-8 text-center w-100 p-2">
                                <h1 className='h3'>Gérez vos budgets en toute en efficacité</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, ducimus.</p>
                                <div className="mt-4">
                                    <Link className="btn btn-primary" href="/clients/users-pages/login">Se connecter</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row justify-content-center">
                            <div className="col-md-8 text-center mt-5">
                                <div className="mb-3">
                                    <GmailConnection />
                                </div>
                                <p className='mb-3 text-muted'>- ou - </p>
                                <h2 className='fw-bold text-center mb-4 h5'>Créer un compte</h2>
                                <SignUpForm />
                                <div className="d-flex justify-content-between my-3 text-decoration-none">
                                    <span className='color-white'>Déjà membre ?</span> <Link href="/clients/users-pages/login" className='text-decoration-none'>Se connecter</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Page