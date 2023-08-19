import { useRef, useState } from "react";
import axios from "axios";

const upload = () => {
  const [form, setFormValue] = useState({
    filename: null,
  });
  console.log(form);
  const inputRefFile = useRef(null);
  const handleChange = (e) => {
    // console.log([e.target]);
    const { name, value } = e.target;
    if (name === "filename") {
      setFormValue((prevState) => ({
        ...prevState,
        filename: e.target.files[0],
      }));
    } else {
      setFormValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value !== null) {
          if (key === "filename") {
            formData.append(key, value);
          } else {
            formData.append(key, value.toString());
          }
        }
      });

      console.log(...formData.entries());
      // console.log(formData);
      const base_url = process.env.NEXT_PUBLIC_URL;
      const response = await axios.post(`${base_url}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      setFormValue((prev) => ({
        ...prev,
        filename: null,
      }));
      inputRefFile.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        ref={inputRefFile}
        name="filename"
        type="file"
        onChange={handleChange}
        placeholder=""
      />
      <button onClick={handleSubmitForm}>Submit</button>
    </div>
  );
};

export default upload;
