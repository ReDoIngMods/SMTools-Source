import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
	return (
		<Layout title="Hello" description="Hello React Page">
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '15vh',
					fontSize: '40px',
				}}>
				
				<h1>
					🛠️ Scrap Mechanic Tools 🛠️
				</h1>
			</div>
			
			<nav className="tools-container" aria-label="Tools container">
				<div className="tool-card">
					<a href="/Lua">
						<img src="/img/Lua-Logo_128x128.png" alt="Lua Logo" />
						<span className="pagination-nav__label">
							Lua API Documentation »
							<p className='pagination-nav__sublabel' style={{textAlign: 'left'}}>
								Documentation for the Lua API
							</p>
						</span>
					</a>
				</div>
				
				<div className="tool-card">
					<a href="/ModdingHelp">
						<img src="/img/ModdingHelpLogo.png" alt="ModdingHelp Logo" />
						<span className="pagination-nav__label">
							Modding Help »
							<p className='pagination-nav__sublabel' style={{textAlign: 'left'}}>
								General Info, Tutorials, etc.
							</p>
						</span>
					</a>
				</div>
				
				<div className="tool-card">
					<a href="/CustomAPIs">
						<img src="/img/dll_docs.png" alt="Custom APIs Logo" />
						<span className="pagination-nav__label">
							DLL API Documentations »
							<p className='pagination-nav__sublabel' style={{textAlign: 'left'}}>
								Documentation for DLL Mod APIs
							</p>
						</span>
					</a>
				</div>
				
				<div className="tool-card">
					<a href="https://github.com/QuestionableM/SM-DLL-Injector" target='_blank'>
						<img src="/img/syringe.png" alt="Syringe Logo" />
						<span className="pagination-nav__label">
							SM-DLL-Injector
							<svg style={{marginLeft: '8px'}} width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K">
								<path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
							</svg>
							<p className='pagination-nav__sublabel' style={{textAlign: 'left'}}>
								Simple DLL Mod Loader by QM
							</p>
						</span>
					</a>
				</div>
				
				<div className="tool-card">
					<a href="https://github.com/ReDoIngMods/MyGui.net-For-SM/" target='_blank'>
						<img src="/img/MyGUI-net.png" alt="MGNET Logo" />
						<span className="pagination-nav__label">
							MyGUI.NET
							<svg style={{marginLeft: '8px'}} width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K">
								<path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
							</svg>
							<p className='pagination-nav__sublabel' style={{textAlign: 'left'}}>
								MyGUI Layout Editor by ReDoIng Mods
							</p>
						</span>
					</a>
				</div>
				
				<div className="tool-card">
					<a href="https://github.com/TechnologicNick/SteamChangePreview" target='_blank'>
						<img src="/img/steam.png" alt="Steam Logo" />
						<span className="pagination-nav__label">
							SteamChangePreview
							<svg style={{marginLeft: '8px'}} width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K">
								<path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
							</svg>
							<p className='pagination-nav__sublabel' style={{textAlign: 'left'}}>
								Steam Workshop Preview Changer by TechnologicNick
							</p>
						</span>
					</a>
				</div>
				
				<div className="tool-card">
					<a href="https://sm.nck.dev/save-editor" target='_blank'>
						<img src="/img/SaveEditor.png" alt="SaveEditor Logo" />
						<span className="pagination-nav__label">
							Save File Editor
							<svg style={{marginLeft: '8px'}} width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K">
								<path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
							</svg>
							<p className='pagination-nav__sublabel' style={{textAlign: 'left'}}>
								In-Browser Save File Editor by TechnologicNick
							</p>
						</span>
					</a>
				</div>
				
				<div className="tool-card">
					<a href="https://github.com/TechnologicNick/SMErrorFixer" target='_blank'>
						<img src="/img/SMErrorFixer.png" alt="SMErrorFixer Logo" />
						<span className="pagination-nav__label">
							SMErrorFixer
							<svg style={{marginLeft: '8px'}} width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K">
								<path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
							</svg>
							<p className='pagination-nav__sublabel' style={{textAlign: 'left'}}>
								Fixes common game and save file errors, by TechnologicNick
							</p>
						</span>
					</a>
				</div>
			</nav>
			
			<div className="news-container">
				<div className="news-card">
					<p style={{textAlign: 'center', display: ''}}>
						<h3>NEWS</h3>
						<strong>30/07/2026</strong> <br/>
						The project has been moved to GitHub.
						<hr/>
						<strong>12/07/2026</strong> <br/>
						A list of handheld tool UUIDs has been added to the <a href="/ModdingHelp">Modding Help</a> page.
						<hr/>
						<strong>26/05/2026</strong> <br/>
						Work on the new documentation is ~60% completed.
						<hr/>
						<strong>07/05/2026</strong> <br/>
						Large improvements to the Lua API Documentation are coming soon.
					</p>
				</div>
			</div>
		</Layout>
	);
}