import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                        rel="stylesheet"
                    />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,100&display=swap"
                          rel="stylesheet"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,100&family=Roboto:wght@300&display=swap"
                        rel="stylesheet"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Abel&family=Poppins:ital,wght@1,100&family=Roboto:wght@300&display=swap"
                        rel="stylesheet"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Abel&family=Poppins:ital,wght@1,100&family=Roboto:wght@300&display=swap"
                        rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Besley:ital@1&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Alef&display=swap" rel="stylesheet"/>

                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument