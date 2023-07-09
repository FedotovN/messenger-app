export default function mobileDetect(): boolean {
    return /Mobi/i.test(window.navigator.userAgent)
}