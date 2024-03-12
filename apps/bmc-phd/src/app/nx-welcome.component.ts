import { Component, ViewEncapsulation } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'rfs-atomic-nx-welcome',
	standalone: true,
	imports: [CommonModule],
	template: `
		<!--
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     This is a starter component and can be deleted.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     Delete this file and get started with your project!
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     -->
		<style>
			html {
				-webkit-text-size-adjust: 100%;
				font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
					'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
					'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
					'Noto Color Emoji';
				line-height: 1.5;
				tab-size: 4;
				scroll-behavior: smooth;
			}
			body {
				font-family: inherit;
				line-height: inherit;
				margin: 0;
			}
			h1,
			h2,
			p,
			pre {
				margin: 0;
			}
			*,
			::before,
			::after {
				box-sizing: border-box;
				border-width: 0;
				border-style: solid;
				border-color: currentColor;
			}
			h1,
			h2 {
				font-size: inherit;
				font-weight: inherit;
			}
			a {
				color: inherit;
				text-decoration: inherit;
			}
			pre {
				font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
					'Liberation Mono', 'Courier New', monospace;
			}
			svg {
				display: block;
				vertical-align: middle;
			}
			svg {
				shape-rendering: auto;
				text-rendering: optimizeLegibility;
			}
			pre {
				background-color: rgba(55, 65, 81, 1);
				border-radius: 0.25rem;
				color: rgba(229, 231, 235, 1);
				font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
					'Liberation Mono', 'Courier New', monospace;
				overflow: scroll;
				padding: 0.5rem 0.75rem;
			}
			.shadow {
				box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
					0 4px 6px -2px rgba(0, 0, 0, 0.05);
			}
			.rounded {
				border-radius: 1.5rem;
			}
			.wrapper {
				width: 100%;
			}
			.container {
				margin-left: auto;
				margin-right: auto;
				max-width: 768px;
				padding-bottom: 3rem;
				padding-left: 1rem;
				padding-right: 1rem;
				color: rgba(55, 65, 81, 1);
				width: 100%;
			}
			#welcome {
				margin-top: 0.5rem;
			}
			#welcome h1 {
				font-size: 3rem;
				font-weight: 500;
				letter-spacing: -0.025em;
				line-height: 1;
			}
			#welcome span {
				display: block;
				font-size: 1.875rem;
				font-weight: 300;
				line-height: 2.25rem;
				margin-bottom: 0.5rem;
			}
			#hero {
				align-items: center;
				background-color: #af07f0;
				border: none;
				box-sizing: border-box;
				color: #ed098de0;
				display: grid;
				grid-template-columns: 1fr;
				margin-top: 3.5rem;
			}
			#hero .text-container {
				color: rgba(255, 255, 255, 1);
				padding: 3rem 2rem;
			}
			#hero .text-container h2 {
				font-size: 1.5rem;
				line-height: 2rem;
				position: relative;
			}
			#hero .text-container h2 svg {
				color: hsla(162, 47%, 50%, 1);
				height: 2rem;
				left: -0.25rem;
				position: absolute;
				top: 0;
				width: 2rem;
			}
			#hero .text-container h2 span {
				margin-left: 2.5rem;
			}
			#hero .text-container a {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 0.75rem;
				color: rgba(55, 65, 81, 1);
				display: inline-block;
				margin-top: 1.5rem;
				padding: 1rem 2rem;
				text-decoration: inherit;
			}
			#hero .logo-container {
				display: none;
				justify-content: center;
				padding-left: 2rem;
				padding-right: 2rem;
			}
			#hero .logo-container svg {
				color: rgba(255, 255, 255, 1);
				width: 66.666667%;
			}
			#middle-content {
				align-items: flex-start;
				display: grid;
				gap: 4rem;
				grid-template-columns: 1fr;
				margin-top: 3.5rem;
			}
			#learning-materials {
				padding: 2.5rem 2rem;
			}
			#learning-materials h2 {
				font-weight: 500;
				font-size: 1.25rem;
				letter-spacing: -0.025em;
				line-height: 1.75rem;
				padding-left: 1rem;
				padding-right: 1rem;
			}
			.list-item-link {
				align-items: center;
				border-radius: 0.75rem;
				display: flex;
				margin-top: 1rem;
				padding: 1rem;
				transition-property: background-color, border-color, color, fill, stroke,
					opacity, box-shadow, transform, filter, backdrop-filter,
					-webkit-backdrop-filter;
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				transition-duration: 150ms;
				width: 100%;
			}
			.list-item-link svg:first-child {
				margin-right: 1rem;
				height: 1.5rem;
				transition-property: background-color, border-color, color, fill, stroke,
					opacity, box-shadow, transform, filter, backdrop-filter,
					-webkit-backdrop-filter;
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				transition-duration: 150ms;
				width: 1.5rem;
			}
			.list-item-link > span {
				flex-grow: 1;
				font-weight: 400;
				transition-property: background-color, border-color, color, fill, stroke,
					opacity, box-shadow, transform, filter, backdrop-filter,
					-webkit-backdrop-filter;
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				transition-duration: 150ms;
			}
			.list-item-link > span > span {
				color: #af07f0;
				display: block;
				flex-grow: 1;
				font-size: 0.75rem;
				font-weight: 300;
				line-height: 1rem;
				transition-property: background-color, border-color, color, fill, stroke,
					opacity, box-shadow, transform, filter, backdrop-filter,
					-webkit-backdrop-filter;
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				transition-duration: 150ms;
			}
			.list-item-link svg:last-child {
				height: 1rem;
				transition-property: all;
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				transition-duration: 150ms;
				width: 1rem;
			}
			.list-item-link:hover {
				color: rgba(255, 255, 255, 1);
				background-color: #af07f0;
			}
			.list-item-link:hover > span {
			}
			.list-item-link:hover > span > span {
				color: rgba(243, 244, 246, 1);
			}
			.list-item-link:hover svg:last-child {
				transform: translateX(0.25rem);
			}
			#other-links {
			}
			.button-pill {
				padding: 1.5rem 2rem;
				margin-bottom: 2rem;
				transition-duration: 300ms;
				transition-property: background-color, border-color, color, fill, stroke,
					opacity, box-shadow, transform, filter, backdrop-filter,
					-webkit-backdrop-filter;
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				align-items: center;
				display: flex;
			}
			.button-pill svg {
				transition-property: background-color, border-color, color, fill, stroke,
					opacity, box-shadow, transform, filter, backdrop-filter,
					-webkit-backdrop-filter;
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				transition-duration: 150ms;
				flex-shrink: 0;
				width: 3rem;
			}
			.button-pill > span {
				letter-spacing: -0.025em;
				font-weight: 400;
				font-size: 1.125rem;
				line-height: 1.75rem;
				padding-left: 1rem;
				padding-right: 1rem;
			}
			.button-pill span span {
				display: block;
				font-size: 0.875rem;
				font-weight: 300;
				line-height: 1.25rem;
			}
			.button-pill:hover svg,
			.button-pill:hover {
				color: rgba(255, 255, 255, 1) !important;
			}
			.nx-console:hover {
				background-color: #af07f0;
			}
			.nx-console svg {
				color: #af07f0;
			}
			.nx-console-jetbrains {
				margin-top: 2rem;
			}
			.nx-console-jetbrains:hover {
				background-color: #af07f0;
			}
			.nx-console-jetbrains svg {
				color: #af07f0;
			}
			#nx-repo:hover {
				background-color: #ffd700;
			}
			#nx-repo svg {
				color: #ffd700;
			}
			#nx-cloud {
				margin-bottom: 2rem;
				margin-top: 2rem;
				padding: 2.5rem 2rem;
			}
			#nx-cloud > div {
				align-items: center;
				display: flex;
			}
			#nx-cloud > div svg {
				border-radius: 0.375rem;
				flex-shrink: 0;
				width: 3rem;
			}
			#nx-cloud > div h2 {
				font-size: 1.125rem;
				font-weight: 400;
				letter-spacing: -0.025em;
				line-height: 1.75rem;
				padding-left: 1rem;
				padding-right: 1rem;
			}
			#nx-cloud > div h2 span {
				display: block;
				font-size: 0.875rem;
				font-weight: 300;
				line-height: 1.25rem;
			}
			#nx-cloud p {
				font-size: 1rem;
				line-height: 1.5rem;
				margin-top: 1rem;
			}
			#nx-cloud pre {
				margin-top: 1rem;
			}
			#nx-cloud a {
				color: rgba(107, 114, 128, 1);
				display: block;
				font-size: 0.875rem;
				line-height: 1.25rem;
				margin-top: 1.5rem;
				text-align: right;
			}
			#nx-cloud a:hover {
				text-decoration: underline;
			}
			#commands {
				padding: 2.5rem 2rem;
				margin-top: 3.5rem;
			}
			#commands h2 {
				font-size: 1.25rem;
				font-weight: 400;
				letter-spacing: -0.025em;
				line-height: 1.75rem;
				padding-left: 1rem;
				padding-right: 1rem;
			}
			#commands p {
				font-size: 1rem;
				font-weight: 300;
				line-height: 1.5rem;
				margin-top: 1rem;
				padding-left: 1rem;
				padding-right: 1rem;
			}
			details {
				align-items: center;
				display: flex;
				margin-top: 1rem;
				padding-left: 1rem;
				padding-right: 1rem;
				width: 100%;
			}
			details pre > span {
				color: rgba(181, 181, 181, 1);
			}
			summary {
				border-radius: 0.5rem;
				display: flex;
				font-weight: 400;
				padding: 0.5rem;
				cursor: pointer;
				transition-property: background-color, border-color, color, fill, stroke,
					opacity, box-shadow, transform, filter, backdrop-filter,
					-webkit-backdrop-filter;
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				transition-duration: 150ms;
			}
			summary:hover {
				background-color: rgba(243, 244, 246, 1);
			}
			summary svg {
				height: 1.5rem;
				margin-right: 1rem;
				width: 1.5rem;
			}
			#love {
				color: rgba(107, 114, 128, 1);
				font-size: 0.875rem;
				line-height: 1.25rem;
				margin-top: 3.5rem;
				opacity: 0.6;
				text-align: center;
			}
			#love svg {
				color: rgba(252, 165, 165, 1);
				width: 1.25rem;
				height: 1.25rem;
				display: inline;
				margin-top: -0.25rem;
			}
			@media screen and (min-width: 768px) {
				#hero {
					grid-template-columns: repeat(2, minmax(0, 1fr));
				}
				#hero .logo-container {
					display: flex;
				}
				#middle-content {
					grid-template-columns: repeat(2, minmax(0, 1fr));
				}
			}
		</style>
		<div class="wrapper">
			<div class="container">
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<!--  MIDDLE CONTENT  -->
				<div id="middle-content">
					<div id="learning-materials" class="rounded shadow">
						<h2>Learning materials</h2>

						<a
							href="https://nx.dev/getting-started/intro?utm_source=nx-project"
							target="_blank"
							rel="noreferrer"
							class="list-item-link"
						>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
								/>
							</svg>
							<span>
								Documentation
								<span> Everything is in there </span>
							</span>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</a>
						<a
							href="https://blog.nrwl.io/?utm_source=nx-project"
							target="_blank"
							rel="noreferrer"
							class="list-item-link"
						>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
								/>
							</svg>
							<span>
								Blog
								<span> Changelog, features & events </span>
							</span>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</a>
						<a
							href="https://www.youtube.com/@NxDevtools/videos?utm_source=nx-project&sub_confirmation=1"
							target="_blank"
							rel="noreferrer"
							class="list-item-link"
						>
							<svg
								role="img"
								viewBox="0 0 24 24"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>YouTube</title>
								<path
									d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
								/>
							</svg>
							<span>
								YouTube channel
								<span> Nx Show, talks & tutorials </span>
							</span>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</a>
						<a
							href="https://nx.dev/angular-tutorial/1-code-generation?utm_source=nx-project"
							target="_blank"
							rel="noreferrer"
							class="list-item-link"
						>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
								/>
							</svg>
							<span>
								Interactive tutorials
								<span> Create an app, step-by-step </span>
							</span>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</a>
						<a
							href="https://nxplaybook.com/?utm_source=nx-project"
							target="_blank"
							rel="noreferrer"
							class="list-item-link"
						>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M12 14l9-5-9-5-9 5 9 5z" />
								<path
									d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
								/>
							</svg>
							<span>
								Video courses
								<span> Nx custom courses </span>
							</span>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</a>
					</div>
					<div id="other-links">
						<a
							class="button-pill rounded shadow nx-console"
							href="https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console&utm_source=nx-project"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								xml:space="preserve"
								version="1.1"
								style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;"
								viewBox="0 0 333 416.25"
								x="0px"
								y="0px"
								fill-rule="evenodd"
								clip-rule="evenodd"
							>
								<defs>
									<style type="text/css">
										.fil0 {
											fill: black;
										}
									</style>
								</defs>
								<g>
									<path
										class="fil0"
										d="M19 126l3 0c2,0 4,1 4,4 0,-3 1,-4 4,-4l2 0c2,0 4,1 4,4 0,-3 2,-4 4,-4l3 0c2,0 4,1 4,4l0 10 0 0c0,0 1,0 1,1l0 0c0,1 -1,1 -1,1l0 0 0 20 0 0c0,0 1,0 1,0l0 1c0,0 -1,0 -1,0l0 0 0 20 0 0c0,0 1,0 1,0l0 1c0,0 -1,1 -1,1l0 0 0 20 0 0c0,0 1,0 1,0l0 1c0,0 -1,0 -1,0l0 0 0 25 -11 0 0 -25 10 0c0,0 0,0 0,0l0 -1c0,0 0,0 0,0l-10 0 0 -21 10 0c0,0 0,0 0,0l0 0c0,-1 0,-1 0,-1l-10 0 0 -20 10 0c0,0 0,0 0,0l0 -1c0,0 0,0 0,0l-10 0 0 -21 10 0c0,0 0,0 0,0l0 0c0,0 0,0 0,0l-10 0 0 -9c0,0 0,-1 0,-1l0 0c0,0 0,1 0,1l0 9 -10 0 0 -9c0,0 0,-1 0,-1l0 0c-1,0 -1,1 -1,1l0 9 -9 0c0,0 0,0 0,0l0 0c0,0 0,0 0,0l9 0 0 21 -9 0c0,0 0,0 0,0l0 1c0,0 0,0 0,0l9 0 0 20 -9 0c0,0 0,0 0,1l0 0c0,0 0,0 0,0l9 0 0 21 -9 0c0,0 0,0 0,0l0 1c0,0 0,0 0,0l9 0 0 25 -10 0 0 -25 0 0c-1,0 -1,0 -1,0l0 -1c0,0 0,0 1,0l0 0 0 -20 0 0c-1,0 -1,-1 -1,-1l0 -1c0,0 0,0 1,0l0 0 0 -20 0 0c-1,0 -1,0 -1,0l0 -1c0,0 0,0 1,0l0 0 0 -20 0 0c-1,0 -1,0 -1,-1l0 0c0,-1 0,-1 1,-1l0 0 0 -10c0,-3 2,-4 4,-4zm150 -26l1 4 1 0c1,-1 3,1 1,2l0 0 10 22 0 0c2,-1 3,2 2,3l0 0 5 12 0 0c2,-1 4,1 2,2l0 0 6 13 0 0c2,0 3,2 1,3l0 0 2 3c1,3 -11,10 -18,12l40 0c0,0 0,2 0,2l-75 0 0 -1 -1 1c0,0 0,0 0,0l73 0 0 1 -73 0c-1,1 -1,1 -1,1l73 0 0 1 -73 0c0,0 0,0 0,1l72 0 0 1 -72 0c0,0 0,0 0,0l72 0 0 1 -72 0c0,1 0,1 0,1l72 0 0 1 -72 0c0,0 0,0 0,1l72 0 0 1 -72 0 0 0c0,0 0,0 0,0l72 0 0 1 -72 0c0,1 0,1 0,1l72 0 0 1 -72 0c0,0 0,1 0,1l72 0 0 1 -72 0c0,0 0,0 0,0l73 0 0 1 -72 0c0,1 0,1 0,1l73 0 0 1 -73 0c0,1 0,1 0,1l1 1 0 -1 75 0c0,0 0,0 0,1l7 0c4,0 4,14 0,14l-1 0c1,0 1,1 1,2l0 2c0,1 0,2 -1,2 0,0 0,0 0,0l2 0c1,0 2,1 2,3l0 7c0,2 -1,3 -2,3l-88 0c-1,0 -2,-1 -2,-3l0 -7c0,-1 0,-2 1,-2l-3 0c-1,0 -2,0 -2,-1 -1,0 -1,-1 -1,-2l0 -2c0,-1 0,-2 1,-2l-3 0c-5,0 -5,-14 0,-14l7 0c-2,-3 -2,-8 -2,-11 0,-4 1,-9 3,-12 2,-1 1,-1 4,1 0,-1 1,-2 1,-2 1,0 2,1 2,2l7 0 -9 -17 9 -4 0 -1 -9 5 0 -1 8 -4 0 -1 -9 4 -18 -37 9 -4 -1 -1 -8 4 0 -1 8 -4 0 0 -9 4 0 -2c0,0 0,1 0,1l0 111c0,2 -2,3 -3,3l-11 0c-1,0 -2,-1 -2,-3l0 -111c0,-2 1,-3 2,-3l11 0c1,0 2,1 2,1l-4 -8c0,-1 0,-2 1,-2l6 -3c0,0 1,0 1,0l-1 -3c-1,-1 -1,-1 -1,-2l0 0c1,-1 1,-1 1,-1l9 -4c0,0 1,0 1,0l0 0c1,0 1,0 1,1l8 16c4,-5 20,-12 22,-9zm9 76c0,0 0,-1 -1,-1l-1 -2c0,0 0,0 0,0l-6 3 8 0zm-4 -4c0,-1 -1,-2 1,-3l0 0 0 0 -9 5 0 1c0,0 0,0 1,1l0 0c0,0 0,0 0,0l7 -4zm0 -4l-6 -12 0 0c-2,1 -3,-2 -1,-2l0 0 -6 -13 0 0c-2,1 -3,-1 -1,-2l0 0 -11 -22 0 0c-1,1 -3,-2 -1,-2l0 0 -2 -4c0,0 0,-1 0,-1l-7 -15 -9 5 35 73 9 -5zm4 3c0,0 -1,0 -1,0 0,-1 0,-1 0,-1 3,-2 6,-4 9,-5 3,-2 7,-3 10,-4 0,0 0,0 0,0 1,1 0,1 0,1 -3,1 -6,2 -9,4 -3,1 -6,3 -9,5zm-8 -16c0,0 0,0 0,0 -1,-1 -1,-1 0,-1 3,-2 6,-4 9,-5 3,-2 6,-3 9,-4 0,0 1,0 1,0 0,0 0,1 -1,1 -3,1 -6,2 -9,4 -3,1 -6,3 -9,5zm-7 -16c0,1 -1,1 -1,0 0,0 0,0 0,0 3,-2 6,-4 9,-6 3,-1 6,-2 10,-3 0,0 0,0 0,0 0,0 0,1 0,1 -3,1 -6,2 -9,3 -3,2 -6,3 -9,5zm-12 -23c0,0 0,0 0,0 0,0 0,0 0,-1 3,-2 6,-3 9,-5 3,-1 6,-3 9,-4 1,0 1,1 1,1 0,0 0,0 0,0 -4,1 -7,3 -10,4 -3,2 -6,3 -9,5zm46 48l1 1c0,1 0,1 -1,2 -5,2 -10,5 -16,7 -1,1 -1,1 -2,0l0 -1c-1,-2 18,-11 18,-9zm-8 -16l5 9c0,1 0,2 0,2 -6,2 -12,4 -17,8 0,0 -1,0 -1,-1l-5 -9c-1,-2 18,-11 18,-9zm-7 -15l4 8c1,1 0,2 0,2 -6,2 -11,4 -17,8 0,0 -1,0 -1,-1l-4 -8c-1,-2 17,-11 18,-9zm-15 -31l1 1c0,1 0,2 -1,2 -5,1 -11,4 -16,8 0,0 -1,0 -2,-1l0 -1c-1,-2 17,-11 18,-9zm-2 74l-1 -3c-1,0 -1,0 -1,0l-5 3 7 0zm-36 -77l10 -5 -1 -1c0,0 0,0 0,0l0 0c0,0 0,0 -1,0l-8 4c0,0 0,0 0,1l0 0c0,0 0,0 0,0l0 1zm-6 7l2 1 -1 2 -1 -1 0 -2zm5 -2l2 0 0 2 -2 -1 0 -1zm4 7l2 1 -1 2 -1 -1 0 -2zm-2 -4l2 1 0 2 -2 -1 0 -2zm-4 -2l1 1 0 2 -1 -1 0 -2zm3 7l2 1 0 2 -2 -1 0 -2zm-2 -4l2 1 0 2 -2 -1 0 -2zm0 5l1 1 0 2 -2 -1 1 -2zm-2 -3l1 1 0 2 -1 -1 0 -2zm29 46l2 1 0 2 -2 -1 0 -2zm7 14l1 1 0 2 -1 -1 0 -2zm-6 3l2 1 0 1 -2 -1 0 -1zm3 -2l2 1 -1 2 -1 -1 0 -2zm1 -6l1 1 0 2 -2 -1 1 -2zm-6 3l2 1 -1 2 -1 -1 0 -2zm3 -1l1 1 0 2 -1 -1 0 -2zm0 -6l2 1 0 2 -2 -1 0 -2zm-5 3l1 1 0 1 -1 -1 0 -1zm3 -2l1 1 0 2 -2 -1 1 -2zm-5 -3l1 1 0 2 -1 -1 0 -2zm2 -1l2 1 0 2 -2 -1 0 -2zm160 -41l0 112c0,1 -1,2 -2,2l-18 0c0,0 -1,0 -1,-1 -1,1 -2,1 -3,1 -1,1 -1,1 -2,1 -1,0 -2,0 -2,-1 -3,0 -4,-1 -4,-3l0 -89c0,-2 1,-3 4,-3 0,0 1,0 2,0 1,0 1,0 2,0 1,0 2,0 3,1l0 -20c0,-3 21,-3 21,0zm-17 15c2,0 3,1 3,3 0,1 -1,2 -3,2 -1,0 -2,-1 -2,-2 0,-2 1,-3 2,-3zm0 80c2,0 3,1 3,2 0,1 -1,2 -3,2 -1,0 -2,-1 -2,-2 0,-1 1,-2 2,-2zm12 -4c1,0 2,1 2,3 0,1 -1,2 -2,2 -1,0 -2,-1 -2,-2 0,-2 1,-3 2,-3zm0 13c1,0 2,1 2,2 0,2 -1,3 -2,3 -1,0 -2,-1 -2,-3 0,-1 1,-2 2,-2zm-12 -22c2,0 3,1 3,2 0,2 -1,3 -3,3 -1,0 -2,-1 -2,-3 0,-1 1,-2 2,-2zm12 -70c1,0 2,1 2,2 0,2 -1,3 -2,3 -1,0 -2,-1 -2,-3 0,-1 1,-2 2,-2zm0 13c1,0 2,1 2,2 0,1 -1,2 -2,2 -1,0 -2,-1 -2,-2 0,-1 1,-2 2,-2zm-12 -22c2,0 3,1 3,2 0,1 -1,2 -3,2 -1,0 -2,-1 -2,-2 0,-1 1,-2 2,-2zm-5 108l0 -89c0,-1 -1,-1 -2,-2 -1,0 -1,0 -2,0 -1,0 -2,0 -2,0 -2,1 -3,1 -3,2l0 89c0,1 1,2 3,2 0,0 1,0 2,0 1,0 1,0 2,0 1,0 2,-1 2,-2zm-36 -91l22 0c1,0 2,1 2,2l0 89c0,2 -1,3 -2,3l-22 0c-2,0 -3,-1 -3,-3l0 -89c0,-1 1,-2 3,-2zm-1 81l7 0c-4,2 -7,5 -7,9l0 -9zm17 0l7 0 0 9c-1,-4 -4,-7 -7,-9zm-5 1c5,0 9,5 9,10 0,0 0,0 0,0l-19 0c0,0 0,0 0,0 0,-5 4,-10 10,-10zm-11 -80l8 0c-4,1 -8,4 -9,8l0 -7c0,-1 0,-1 1,-1zm11 2c5,0 10,5 10,10 0,6 -5,10 -10,10 -6,0 -10,-4 -10,-10 0,-5 4,-10 10,-10zm0 2c4,0 7,4 7,8 0,4 -3,8 -7,8 -5,0 -8,-4 -8,-8 0,-4 3,-8 8,-8zm0 2l1 4 2 -2 -1 3 3 -1 -3 2 3 2 -3 0 1 3 -2 -2 -1 3 -1 -3 -3 2 2 -3 -4 0 3 -2 -3 -2 4 1 -2 -3 3 2 1 -4zm0 5c1,0 1,0 1,1 0,1 0,2 -1,2 -1,0 -2,-1 -2,-2 0,-1 1,-1 2,-1zm3 -11l8 0c0,0 1,0 1,1l0 7c-2,-4 -5,-7 -9,-8zm9 17l0 7c0,0 -1,1 -1,1l-8 0c4,-1 7,-4 9,-8zm-15 8l-8 0c-1,0 -1,-1 -1,-1l0 -7c1,4 5,7 9,8zm-13 -49l0 114c0,2 -15,2 -15,0l0 -114c0,-2 15,-2 15,0zm-53 105l3 0 0 9 -3 0 0 -9zm-46 10l0 -4c-1,0 -1,-1 -1,-1l-6 0 0 -1 6 0c0,0 0,0 1,-1l0 -3 1 0 0 3c0,0 0,1 1,1l22 0c0,-1 1,-2 2,-2 2,0 3,1 3,3 0,1 -1,2 -3,2 -1,0 -2,-1 -2,-2l-22 0c-1,1 -1,1 -1,1l0 4 -1 0zm79 -7c1,0 1,1 1,2 0,0 0,1 -1,1 -1,0 -1,-1 -1,-1 0,-1 0,-2 1,-2zm-14 -3c9,0 10,9 0,9l0 -9zm-10 0l3 0 0 9 -3 0 0 -9zm-5 0l3 0 0 9 -3 0 0 -9zm-57 -8l0 5 84 0c0,0 1,0 1,0 0,0 0,-1 0,-1l0 -2c0,-1 0,-1 0,-1 0,-1 -1,-1 -1,-1l-84 0zm-1 5l0 -5 -1 0 0 5 1 0zm-2 0l0 -5 -1 0c0,0 -1,0 -1,1 0,0 0,0 0,1l0 2c0,0 0,1 0,1 0,0 1,0 1,0l1 0zm0 -12l-4 1 2 2 -3 -1 -1 3c-1,-4 -1,-6 0,-10l1 3 3 -2 -2 3 4 1zm84 0l4 1 -2 2 3 -1 0 3c2,-4 2,-6 0,-10l0 3 -3 -2 2 3 -4 1zm-79 -27l-1 -1c-2,2 -3,7 -3,10 0,3 1,8 3,11l2 -1c-1,-3 -2,-6 -2,-9 0,-4 1,-7 1,-10zm-32 51l12 0c1,0 1,0 1,0l0 0c0,-1 0,-1 -1,-1l-12 0c0,0 -1,0 -1,1l0 0c0,0 1,0 1,0zm2 -2l9 0c0,0 0,-1 0,-1l0 0c0,0 0,-1 0,-1l-9 0c-1,0 -1,1 -1,1l0 0c0,0 0,1 1,1zm-3 -110l13 0c0,0 0,0 0,1l0 0c0,0 0,0 0,0l-13 0c0,0 0,0 0,0l0 0c0,-1 0,-1 0,-1zm4 2l6 0c0,0 0,0 0,1l0 0c0,0 0,0 0,0l-6 0c-1,0 -1,0 -1,0l0 0c0,-1 0,-1 1,-1zm-7 16l0 96 -1 0 0 -96c0,-1 -3,-2 -7,-3 -2,0 -4,0 -6,0 -1,0 -3,0 -5,0 -4,1 -8,2 -8,3l0 96 -1 0 0 -96c0,-2 4,-3 9,-3 2,-1 4,-1 5,-1 2,0 4,0 6,1 5,0 8,1 8,3zm-3 -1c0,0 1,1 1,1l0 0 0 0 0 67 0 0c-2,-3 -3,-5 -5,-6 -2,-1 -4,-2 -7,-2 -2,0 -4,1 -6,2 -2,1 -4,3 -5,6l-1 0 0 -67 0 0 1 0c0,0 1,-1 1,-1 1,0 2,0 2,0 2,0 3,-1 4,-1 2,0 3,0 4,0 2,0 3,0 4,0 2,0 3,1 4,1l0 0c1,0 2,0 3,0zm-22 97l-1 0 0 -12 1 0c1,2 3,4 5,5 2,2 4,3 6,3 3,0 5,-1 7,-3 2,-1 3,-3 5,-5l0 0 0 12 0 0 -1 0 -22 0 0 0zm-16 -86l10 0c1,0 2,1 2,2l0 84 -14 0 0 -84c0,-1 1,-2 2,-2zm258 97l-317 0 0 -9 317 0 0 9zm-272 -105l7 0c2,0 4,2 4,4l0 90 -15 0 0 -90c0,-2 2,-4 4,-4zm-3 22l12 0 0 43 -12 0 0 -43zm-14 72l-10 0 0 -25 10 0 0 25zm0 -90l-10 0 0 21 10 0 0 -21zm0 22l-10 0 0 20 10 0 0 -20zm0 21l-10 0 0 21 10 0 0 -21z"
									/>
								</g>
								<text
									x="0"
									y="348"
									fill="#000000"
									font-size="5px"
									font-weight="bold"
									font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
								>
									Created by Cantasia
								</text>
								<text
									x="0"
									y="353"
									fill="#000000"
									font-size="5px"
									font-weight="bold"
									font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
								></text>
							</svg>
							<span>
								Research
								<span>The official catalog of my research.</span>
							</span>
						</a>
						<a
							class="button-pill rounded shadow nx-console-jetbrains"
							href="https://plugins.jetbrains.com/plugin/21060-nx-console"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								height="48"
								width="48"
								viewBox="20 20 60 60"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="m22.5 22.5h60v60h-60z" />
								<g fill="#fff">
									<path d="m29.03 71.25h22.5v3.75h-22.5z" />
									<path
										d="m28.09 38 1.67-1.58a1.88 1.88 0 0 0 1.47.87c.64 0 1.06-.44 1.06-1.31v-5.98h2.58v6a3.48 3.48 0 0 1 -.87 2.6 3.56 3.56 0 0 1 -2.57.95 3.84 3.84 0 0 1 -3.34-1.55z"
									/>
									<path
										d="m36 30h7.53v2.19h-5v1.44h4.49v2h-4.42v1.49h5v2.21h-7.6z"
									/>
									<path d="m47.23 32.29h-2.8v-2.29h8.21v2.27h-2.81v7.1h-2.6z" />
									<path
										d="m29.13 43.08h4.42a3.53 3.53 0 0 1 2.55.83 2.09 2.09 0 0 1 .6 1.53 2.16 2.16 0 0 1 -1.44 2.09 2.27 2.27 0 0 1 1.86 2.29c0 1.61-1.31 2.59-3.55 2.59h-4.44zm5 2.89c0-.52-.42-.8-1.18-.8h-1.29v1.64h1.24c.79 0 1.25-.26 1.25-.81zm-.9 2.66h-1.57v1.73h1.62c.8 0 1.24-.31 1.24-.86 0-.5-.4-.87-1.27-.87z"
									/>
									<path
										d="m38 43.08h4.1a4.19 4.19 0 0 1 3 1 2.93 2.93 0 0 1 .9 2.19 3 3 0 0 1 -1.93 2.89l2.24 3.27h-3l-1.88-2.84h-.87v2.84h-2.56zm4 4.5c.87 0 1.39-.43 1.39-1.11 0-.75-.54-1.12-1.4-1.12h-1.44v2.26z"
									/>
									<path
										d="m49.59 43h2.5l4 9.44h-2.79l-.67-1.69h-3.63l-.67 1.69h-2.71zm2.27 5.73-1-2.65-1.06 2.65z"
									/>
									<path d="m56.46 43.05h2.6v9.37h-2.6z" />
									<path
										d="m60.06 43.05h2.42l3.37 5v-5h2.57v9.37h-2.26l-3.53-5.14v5.14h-2.57z"
									/>
									<path
										d="m68.86 51 1.45-1.73a4.84 4.84 0 0 0 3 1.13c.71 0 1.08-.24 1.08-.65 0-.4-.31-.6-1.59-.91-2-.46-3.53-1-3.53-2.93 0-1.74 1.37-3 3.62-3a5.89 5.89 0 0 1 3.86 1.25l-1.26 1.84a4.63 4.63 0 0 0 -2.62-.92c-.63 0-.94.25-.94.6 0 .42.32.61 1.63.91 2.14.46 3.44 1.16 3.44 2.91 0 1.91-1.51 3-3.79 3a6.58 6.58 0 0 1 -4.35-1.5z"
									/>
								</g>
							</svg>
							<span>
								Install Nx Console for JetBrains
								<span
									>Available for WebStorm, Intellij IDEA Ultimate and
									more!</span
								>
							</span>
						</a>
						<div id="nx-cloud" class="rounded shadow">
							<div>
								<svg
									id="nx-cloud-logo"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									stroke="currentColor"
									fill="transparent"
									viewBox="0 0 24 24"
								>
									<path
										stroke-width="2"
										d="M23 3.75V6.5c-3.036 0-5.5 2.464-5.5 5.5s-2.464 5.5-5.5 5.5-5.5 2.464-5.5 5.5H3.75C2.232 23 1 21.768 1 20.25V3.75C1 2.232 2.232 1 3.75 1h16.5C21.768 1 23 2.232 23 3.75Z"
									/>
									<path
										stroke-width="2"
										d="M23 6v14.1667C23 21.7307 21.7307 23 20.1667 23H6c0-3.128 2.53867-5.6667 5.6667-5.6667 3.128 0 5.6666-2.5386 5.6666-5.6666C17.3333 8.53867 19.872 6 23 6Z"
									/>
								</svg>
								<h2>
									Nx Cloud
									<span> Enable faster CI & better DX </span>
								</h2>
							</div>
							<p>
								You can activate distributed tasks executions and caching by
								running:
							</p>
						</div>
					</div>
				</div>
				<!--  COMMANDS  -->
				<div id="commands" class="rounded shadow">
					<h2>Next steps</h2>
					<p>Here are some things you can do with Nx:</p>
					<details>
						<summary>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							Add UI library
						</summary>
						<pre><span># Generate UI lib</span>
nx g &#64;nx/angular:lib ui
<span># Add a component</span>
nx g &#64;nx/angular:component ui/src/lib/button</pre>
					</details>
					<details>
						<summary>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							View project details
						</summary>
						<pre>nx show project bmc-phd --web</pre>
					</details>
					<details>
						<summary>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							View interactive project graph
						</summary>
						<pre>nx graph</pre>
					</details>
					<details>
						<summary>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							Run affected commands
						</summary>
						<pre><span># see what&apos;s been affected by changes</span>
nx affected:graph
<span># run tests for current changes</span>
nx affected:test
<span># run e2e tests for current changes</span>
nx affected:e2e</pre>
					</details>
				</div>
				<p id="love">
					Carefully crafted with
					<svg
						fill="currentColor"
						stroke="none"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/>
					</svg>
				</p>
			</div>
		</div>
	`,
	styles: [],
	encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
