export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-8">
      <div className="bg-white p-6 w-[800px] shadow-md border border-gray-300">
        <div className="flex justify-between items-start mb-4">
          {/* QR Code */}
          <div className="w-24 h-24 border border-gray-700 p-0.5">
            <img
              src="/file.svg" 
              alt="Blank Image"
              className="w-full h-full"
            />
          </div>

          {/* Header Text */}
          <div className="text-center flex-grow mr-24">
            <p className="text-[15px] font-sans  text-red-900 tracking-wide">
              CERTIFICATE VERIFICATION REPORT
            </p>
            <p className="text-[13px] font-sans mt-1">
              Generated On 30/01/2026 12.17 AM
            </p>
           <p className="text-[16px] font-sans font-bold text-red-700 mt-2 inline-block border-b-2 border-red-300">
  CASTE CERTIFICATE
</p>
          </div>
        </div>

        {/* Certificate Details Line */}
        <div className="mb-4">
          <p className="text-[13px] font-sans">
            Details of the Certificate no. 100098265 Issued on 2026-01-31
          </p>
        </div>

        {/* Details Table */}
        <div className="mb-6">
          <table className="w-full border-collapse border border-gray-700 text-[13px] font-sans">
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5 w-[45%]">Name of Person to whom certificate is</td>
                <td className="p-1.5 font-medium">AlBIN</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">Gender</td>
                <td className="p-1.5">Male</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">Age</td>
                <td className="p-1.5">21</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">Name of Father</td>
                <td className="p-1.5 font-medium">UMAR HUSSAIN</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">Address</td>
                <td className="p-1.5 leading-tight">7/826 VADASHERY(H), KALLARAKKAL PARAMBU, NEAR ELLIKKAL TEMPLE,MATTANCHERRY, ERNAKULAM, KERALA – 682002</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">Religion</td>
                <td className="p-1.5">Christian</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">Caste</td>
                <td className="p-1.5">OBC Christian</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">Post Office with Pin code</td>
                <td className="p-1.5">MATTANCHERRY, 682002</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">Name of Local body</td>
                <td className="p-1.5">Mattancherry</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">Village</td>
                <td className="p-1.5">Mattancherry</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">Taluk</td>
                <td className="p-1.5">Kochi Taluk</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">District</td>
                <td className="p-1.5">Ernakulam </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">Date of Issue of Certificate</td>
                <td className="p-1.5">31/01/2026</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">Designation of the issuing officer</td>
                <td className="p-1.5">VILLAGE OFFICER</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">Name of the issuing officer</td>
                <td className="p-1.5">Baiju K G</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1.5">Name of Office</td>
                <td className="p-1.5">LOKAMALESWARAM VILLAGE OFFICE</td>
              </tr>
              <tr>
                <td className="border-r border-gray-700 p-1.5">Remarks</td>
                <td className="p-1.5">Nil</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Text */}
        <div>
          <p className="text-[13px] font-sans">
            This certificate is valid only for a period of three years from the date of issue
          </p>
        </div>
      </div>
    </div>
  );
}