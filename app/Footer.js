import React, { Component } from 'react'

class Footer extends Component {
  render() {
	
    return (
      <footer className="page-footer center-on-small-only">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-3 offset-lg-1 hidden-lg-down">
					<h5 className="title">ABOUT WATTO</h5>
					<p>Watto takes pride in his business and takes care of his many loyal customers. </p>

					<p>When Qui-Gon Jinn attempted a mind trick on him in order to get him to accept 20,000 credits in exchange for a T-14 hyperdrive 
					generator, he shrugged it off.</p>
				</div>

				<hr className="hidden-md-up" />
				<div className="col-lg-2 col-md-4 offset-lg-1">
					<h5 className="title">First column</h5>
					<ul>
						<li><a href="#!">Link 1</a></li>
						<li><a href="#!">Link 2</a></li>
						<li><a href="#!">Link 3</a></li>
						<li><a href="#!">Link 4</a></li>
					</ul>
				</div>

				<hr className="hidden-md-up" />

				<div className="col-lg-2 col-md-4">
					<h5 className="title">Second column</h5>
					<ul>
						<li><a href="#!">Link 1</a></li>
						<li><a href="#!">Link 2</a></li>
						<li><a href="#!">Link 3</a></li>
						<li><a href="#!">Link 4</a></li>
					</ul>
				</div>

				<hr className="hidden-md-up" />

				<div className="col-lg-2 col-md-4">
					<h5 className="title">Third column</h5>
					<ul>
						<li><a href="#!">Link 1</a></li>
						<li><a href="#!">Link 2</a></li>
						<li><a href="#!">Link 3</a></li>
						<li><a href="#!">Link 4</a></li>
					</ul>
				</div>

			</div>
		</div>
		<div className="footer-copyright">
			<div className="container-fluid">
				Creator: Haley Landon
			</div>
		</div>

	</footer>
    );
  }
}

export default Footer