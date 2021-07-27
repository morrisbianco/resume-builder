// Node Modules
import React from 'react';
import './Template.css';

const Template = () => {

  return (
    // <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>

<head>

	<title>Jonathan Doe | Web Designer, Director | name@yourdomain.com</title>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />

	<meta name="keywords" content="" />
	<meta name="description" content="" />

	<link rel="stylesheet" type="text/css"
		href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" media="all" />
	<link rel="stylesheet" type="text/css" href="resume.css" media="all" />

</head>

<body>
	<main>
		<div id="doc2" class="yui-t7">
			<div id="inner">

				<div id="hd">
					<div class="yui-gc">
						<div class="yui-u first">
							<h1>Jonathan Doe</h1>
							<h2>Web Designer, Director</h2>
						</div>

						<div class="yui-u">
							<div class="contact-info">

								<h3><a href="mailto:name@yourdomain.com">name@yourdomain.com</a></h3>
								<h3>(313) - 867-5309</h3>
							</div>
							{/* <!--// .contact-info --> */}
						</div>
					</div>
					{/* <!--// .yui-gc --> */}
				</div>
				{/* <!--// hd --> */}

				<div id="bd">
					<div id="yui-main">
						<div class="yui-b">

							<div class="yui-gf">
								<div class="yui-u first">
									<h2>Profile</h2>
								</div>
								<div class="yui-u">
									<p class="enlarge">
										Progressively evolve cross-platform ideas before impactful infomediaries. Energistically visualize
										tactical initiatives before cross-media catalysts for change.
									</p>
								</div>
							</div>
							{/* <!--// .yui-gf --> */}

							<div class="yui-gf">
								<div class="yui-u first">
									<h2>Skills</h2>
								</div>
								<div class="yui-u">

									<div class="talent">
										<h2>Web Design</h2>
										<p>Assertively exploit wireless initiatives rather than synergistic core competencies. </p>
									</div>

									<div class="talent">
										<h2>Interface Design</h2>
										<p>Credibly streamline mission-critical value with multifunctional functionalities. </p>
									</div>

									<div class="talent">
										<h2>Project Direction</h2>
										<p>Proven ability to lead and manage a wide variety of design and development projects in team and
											independent situations.</p>
									</div>
								</div>
							</div>
							{/* <!--// .yui-gf --> */}

							<div class="yui-gf">
								<div class="yui-u first">
									<h2>Technical</h2>
								</div>
								<div class="yui-u">
									<ul class="talent">
										<li>XHTML</li>
										<li>CSS</li>
										<li class="last">Javascript</li>
									</ul>

									<ul class="talent">
										<li>Jquery</li>
										<li>PHP</li>
										<li class="last">CVS / Subversion</li>
									</ul>

									<ul class="talent">
										<li>OS X</li>
										<li>Windows XP/Vista</li>
										<li class="last">Linux</li>
									</ul>
								</div>
							</div>
							{/* <!--// .yui-gf--> */}

							<div class="yui-gf">

								<div class="yui-u first">
									<h2>Experience</h2>
								</div>
								{/* <!--// .yui-u --> */}

								<div class="yui-u">



									<div class="job last">
										<h2>International Business Machines (IBM)</h2>
										<h3>Lead Web Designer</h3>
										<h4>2001-2004</h4>
										<p>Globally re-engineer cross-media schemas through viral methods of empowerment. Proactively grow
											long-term high-impact human capital and highly efficient innovation. Intrinsicly iterate excellent
											e-tailers with timely e-markets.</p>
									</div>

								</div>
							</div>


							<div class="yui-gf last">
								<div class="yui-u first">
									<h2>Education</h2>
								</div>
								<div class="yui-u">
									<h2>Indiana University - Bloomington, Indiana</h2>
									<h3>Dual Major, Economics and English &mdash; <strong>4.0 GPA</strong> </h3>
								</div>
							</div>


						</div>
					</div>
				</div>

				<div id="ft">
					<p>Jonathan Doe &mdash; <a href="mailto:name@yourdomain.com">name@yourdomain.com</a> &mdash; (313) - 867-5309
					</p>
				</div>
				{/* <!--// footer --> */}

			</div>
      {/* <!-- // inner --> */}

			<button>click</button>
		</div>
		{/* <!--// doc --> */}
	</main>

</body>
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js"></script>
<script>
	const main = document.querySelector("main");
	const button = document.querySelector("button");

	function createPDF() {
		var pdf = new jsPDF('p', 'pt', 'a4');
		pdf.addHTML(main, function () {
			pdf.save('web.pdf');
		});
	}

	button.addEventListener("click", () => {
		button.style.display = 'none';
		createPDF();
	});
</script> */}

</html>
  );
};

export default Template;
