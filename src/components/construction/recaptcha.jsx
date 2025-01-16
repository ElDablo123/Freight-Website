import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6Lep_7gqAAAAAEn64OGTWttvoff0mGCwAICMd9PT";

const ReCaptcha = () => {
    return (
        <div className="g-recaptcha" data-sitekey={RECAPTCHA_SITE_KEY} data-action="LOGIN"></div>
    )
}

export default ReCaptcha;