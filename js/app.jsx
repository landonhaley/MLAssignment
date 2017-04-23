var topNav = (
<div className="container">
	<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon">
		</span>
	</button>
	<a className="navbar-brand" href="#">
		<img id="logo" src="img/svg/logo.svg" height="35" width="77" alt="Watto's" />
	</a>
	<div className="collapse navbar-collapse" id="navbarNav">
		<ul className="navbar-nav mr-auto">
			<li className="nav-item active">
				<a className="nav-link">
					Home 
					<span className="sr-only">
						(current)
					</span>
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link">Buy</a>
			</li>
			<li className="nav-item">
				<a className="nav-link">Sell</a>
			</li>
			<li className="nav-item btn-group">
				<a className="nav-link dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
				<div className="dropdown-menu" aria-labelledby="dropdownMenu1">
					<a className="dropdown-item">
						Our Mission
					</a>
					<a className="dropdown-item">
						Interstellar Partnerships
					</a>
					<a className="dropdown-item">
						Faster-than-light Service
					</a>
				</div>
			</li>
		</ul>
		<hr className="mobile-nav-divider" />
		<ul className="navbar-nav">
			<li className="nav-item">
				<a className="nav-link">
					<i className="fa fa-map-marker" aria-hidden="true"></i>357 Galaxy Rd, Mos Espa, Tatooine
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link">
					<i className="fa fa-phone"></i>(555) 555-3520
				</a>
			</li>
		</ul>
	</div>
</div>
);



ReactDOM.render(topNav,document.getElementById('top-navigation'));