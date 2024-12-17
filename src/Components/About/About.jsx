import React from "react";
import { IoMdCall } from "react-icons/io";
import { RiArrowRightFill } from "react-icons/ri";
const About = () => {
  return (
    <div className="pl-6">
      <h1 className="text-left text-3xl font-semibold text-green-600 border-b-2 border-blue-300 mt-10 pb-3">
        Contact information
      </h1>
      <div className="mt-3  border-b-2 border-blue-300 pb-3">
        <div className="flex mb-2">
          <IoMdCall className="mt-1 mr-3 text-lg text-blue-500"></IoMdCall>
          <h3 className="text-lg">
            Dial <span className="font-bold">09638666444, 01897627858</span>
          </h3>
        </div>
        <h2 className="text-lg text-left">
          <span className="font-bold">N.B. </span> Our Contact Centre is
          available from 9 am to 8 pm (Saturday to Thursday).
        </h2>
      </div>
      <div className="mt-3  border-b-2 border-blue-300 pb-3">
        <div className="flex mb-2">
          <RiArrowRightFill className="mt-1 mr-1 text-lg"></RiArrowRightFill>
          <h3 className="text-lg font-semibold">For Technical Support</h3>
        </div>
        <h2 className="text-lg text-left">
          Email: <u>support@bdjobs.com</u>
        </h2>
        <h2 className="text-lg text-left">Mobile: 01897627858</h2>
      </div>
      <div className="mt-3  border-b-2 border-blue-300 pb-3">
        <div className="flex mb-2">
          <RiArrowRightFill className="mt-1 mr-1 text-lg"></RiArrowRightFill>
          <h3 className="text-lg font-semibold">
            For Sales Support (Job posting & pricing)
          </h3>
        </div>
        <h2 className="text-lg text-left">
          Email: <u>sales@bdjobs.com</u>
        </h2>
        <h2 className="text-lg text-left">
          Mobile: 01811410852, 01811410853, 01811410854, 01811410856,
          01811445152, 01811445151, 01811445150
        </h2>
      </div>
      <div className="mt-3  border-b-2 border-blue-300 pb-3">
        <div className="flex mb-2">
          <RiArrowRightFill className="mt-1 mr-1 text-lg"></RiArrowRightFill>
          <h3 className="text-lg font-semibold">For Billing Support</h3>
        </div>

        <h2 className="text-lg text-left">
          Mobile: 01811410864, 01833319527, 01896013860
        </h2>
      </div>
      <div className="mt-12  ">
        <div className="flex mb-2">
          <RiArrowRightFill className="mt-1 mr-1 text-lg"></RiArrowRightFill>
          <h3 className="text-lg font-semibold">
            {" "}
            For any sales query (for the clients outside Dhaka):
          </h3>
        </div>
      </div>
      <div className="overflow-x-auto mb-20">
        <table className="table table-zebra">
          {/* Table Header */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Region</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {/* Row 1 */}
            <tr>
              <th>1</th>
              <td>Chittagong</td>
              <td>01811410851</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Sylhet</td>
              <td>01847187946</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Narayanganj</td>
              <td>01847213992</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Mymensingh</td>
              <td>01844488995</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Khulna</td>
              <td>01847187945</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Gazipur</td>
              <td>01847213995</td>
            </tr>
            <tr>
              <th>7</th>
              <td>Bogra</td>
              <td>01847213996</td>
            </tr>
            <tr>
              <th>8</th>
              <td>Rajshahi</td>
              <td>01847129105</td>
            </tr>
            <tr>
              <th>9</th>
              <td>Savar</td>
              <td>01844545969</td>
            </tr>
            <tr>
              <th>10</th>
              <td>Cox's Bazar</td>
              <td>01847274898</td>
            </tr>
            <tr>
              <th>11</th>
              <td>Syedpur</td>
              <td>01844519331</td>
            </tr>
            <tr>
              <th>12</th>
              <td>Barishal</td>
              <td>01844519325</td>
            </tr>
            <tr>
              <th>13</th>
              <td>Faridpur</td>
              <td>01894924700</td>
            </tr>
            <tr>
              <th>14</th>
              <td>Jashore</td>
              <td>01844519335</td>
            </tr>
            <tr>
              <th>15</th>
              <td>Kushtia</td>
              <td>01894924699</td>
            </tr>
            <tr>
              <th>16</th>
              <td>Pabna</td>
              <td>01896013863</td>
            </tr>
            <tr>
              <th>17</th>
              <td>Noakhali</td>
              <td>01897612786</td>
            </tr>
            <tr>
              <th>18</th>
              <td>Feni</td>
              <td>01897627857</td>
            </tr>
            <tr>
              <th>19</th>
              <td>Moulvibazar</td>
              <td>01896013870</td>
            </tr>
            <tr>
              <th>20</th>
              <td>Rangpur</td>
              <td>01897612789</td>
            </tr>
            <tr>
              <th>21</th>
              <td>Cumilla</td>
              <td>01844545967</td>
            </tr>
            <tr>
              <th>22</th>
              <td>Tangail</td>
              <td>01897612790</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
