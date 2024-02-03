import React, { useEffect } from 'react'
import Head from 'next/head'
import { format } from 'date-fns'

import { APP_NAME, CANONICAL } from '../libs/constants'
import Header from '../components/Header'
import MIndex from '../components/main/MIndex'
import Footer from '../components/Footer'

export default function Home() {
    const currentDate = new Date()
    const currentYear = format(currentDate, 'yyyy')

    useEffect(() => {
        document.title = `Portail Spirituel Africain - ${APP_NAME}`;
    }, []);

    return (
        <>
            <Head>
                <meta name="description" content={`La liste des meilleurs Grands Maître Marabout d'Afrique notamment du Bénin fiable en ${currentYear} disponible sur ${APP_NAME}. Ils sont certifiés et populaires.`} />
                <meta name="keywords" content="Grand, Maître Marabout, Bénin, Puissant Occulte" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={CANONICAL} />
            </Head>
            <div className="dark:bg-slate-900">
                <Header />
                <MIndex />
                <Footer />
            </div>
        </>
    )
};