import { useEffect } from 'react'

import '@/styles/Tobii.min.css'
import '@/styles/Materialdesignicons.min.css'
import '@/styles/Tailwind.min.css'

export default function App({ Component, pageProps }) {
	useEffect(() => {
		const loader = () => {
			if (document.getElementById('preloader')) {
				setTimeout(() => {
					document.getElementById('preloader').style.visibility = 'hidden';
					document.getElementById('preloader').style.opacity = '0';
				}, 350);
			}
		};

		loader();

	}, []);

	return (
		<>
			<Component {...pageProps} />
			{/* <script src="/js/tobii.min.js"></script>
			<script src="/js/feather.min.js"></script>
			<script src="/js/plugins.init.js"></script>
			<script src="/js/app.js"></script> */}
		</>
	)
}