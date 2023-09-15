
export default function Donate(){
    return(
        <div>
            <script src="https://donorbox.org/widget.js" paypalExpress="false"/>
            <iframe src="https://donorbox.org/embed/twoormore" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" height="900px" width="100%"/>
        </div>
    )
}