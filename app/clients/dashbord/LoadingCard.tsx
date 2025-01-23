function LoadingCard() {
    return (
        <div className="card" aria-hidden="true">
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-12 p-5 rounded-3"></span>
                </h5>
                <div className="card-text placeholder-glow row">
                    <div className="col-6">
                        <span className="placeholder col-12 rounded-2"></span>
                    </div>
                    <div className="col-6">
                        <span className="placeholder col-12 rounded-2"></span>
                    </div>
                </div>
                <h5 className="card-title placeholder-glow">
                    <span className="placeholder p-2 col-12 rounded-3"></span>
                </h5>
            </div>
        </div>
    )
}

export default LoadingCard