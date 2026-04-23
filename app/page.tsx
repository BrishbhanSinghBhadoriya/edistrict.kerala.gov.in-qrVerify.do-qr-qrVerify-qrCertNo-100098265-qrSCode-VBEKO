export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-2 md:py-4 px-1">
      <div className="bg-white p-2 md:p-4 w-full max-w-[380px] md:max-w-[800px] shadow-md border border-gray-300">
        <div className="flex justify-between items-start mb-2 md:mb-3">
          {/* QR Code */}
          <div className="w-16 h-16 md:w-20 md:h-20 border border-gray-700 p-0.5 flex-shrink-0">
            <img
              src="qrcode.jpeg"
              alt="QR Code"
              className="w-full h-full"
            />
          </div>

          {/* Header Text */}
          <div className="text-center flex-grow ml-2 md:ml-3 mt-0.5">
            <p className="text-[9px] md:text-[12px] font-sans text-red-900 tracking-wide">
              CERTIFICATE VERIFICATION REPORT
            </p>
            <p className="text-[8px] md:text-[10px] font-sans mt-0.5">
              Generated On 30/01/2026 12.17 AM
            </p>
           <p className="text-[10px] md:text-[13px] font-sans font-bold text-red-700 mt-1 inline-block border-b-2 border-red-300">
  CASTE CERTIFICATE
</p>
          </div>
        </div>

        {/* Certificate Details Line */}
        <div className="mb-2 md:mb-3">
          <p className="text-[8px] md:text-[10px] font-sans">
            Details of the Certificate no. 100098265 Issued on 2026-01-31
          </p>
        </div>

        {/* Details Table */}
        <div className="mb-2 md:mb-4">
          <table className="w-full border-collapse border border-gray-700 text-[8px] md:text-[11px] font-sans">
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1 w-[40%]">Name of Person</td>
                <td className="p-1 font-medium">AlBIN</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">Gender</td>
                <td className="p-1">Male</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">Age</td>
                <td className="p-1">22</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">Father</td>
                <td className="p-1 font-medium">JOSEPH SUNIL</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">Address</td>
                <td className="p-1 leading-tight">VADASHREY 7/826 MATTANCHEERY ERNAKULAM</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">Religion</td>
                <td className="p-1">Christian</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">Caste</td>
                <td className="p-1">OBC Christian</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">Post Office</td>
                <td className="p-1">MATTANCHERRY, 682002</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">Local body</td>
                <td className="p-1">Mattancherry</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">Village</td>
                <td className="p-1">Mattancherry</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">Taluk</td>
                <td className="p-1">Kochi Taluk</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">District</td>
                <td className="p-1">Ernakulam </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">Date of Issue</td>
                <td className="p-1">31/01/2026</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">Issuing Officer</td>
                <td className="p-1">VILLAGE OFFICER</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">Officer Name</td>
                <td className="p-1">Baiju K G</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="border-r border-gray-700 p-1">Office</td>
                <td className="p-1">MATTANCHERRY VILLAGE OFFICE</td>
              </tr>
              <tr>
                <td className="border-r border-gray-700 p-1">Remarks</td>
                <td className="p-1">Nil</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Text */}
        <div>
          <p className="text-[8px] md:text-[10px] font-sans">
            This certificate is valid only for a period of three years from the date of issue
          </p>
        </div>
      </div>
    </div>
  );
}