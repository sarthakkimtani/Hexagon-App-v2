import React from "react";
import "./AgreementCard.css";
import { BrowserRouter, Link } from "react-router-dom";

class AgreementCard extends React.Component {
	// eslint-disable-next-line
	constructor(props) {
		super(props);
	}
	render() {
		return(
				<BrowserRouter>
					<div className="container">
						<p className="paragraph">
							<b>The below notice and this permission notice shall be included in all copies or substantial portions of the Software.<br />
							THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br />
						    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,<br />
						    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
						    OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</b>
						</p>
						<button type="button" id="back-btn">
							<Link to="/" style={{ 'textDecoration': 'none', 'color': 'white' }}>
		              		Go Back
		          			</Link>
						</button>
						<button type="button" id="agree-btn">
						   <Link to="/main" style={{ 'textDecoration': 'none', 'color': 'white' }}>
		              		I Agree
		          		   </Link>
						</button>
					</div>
				</BrowserRouter>
			);
	}
}

export default AgreementCard;