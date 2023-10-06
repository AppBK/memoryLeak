import { useState, useEffect } from "react";
import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { authenticate } from "../../store/session";

export default function LeakyModal() {
  const {closeModal} = useModal();
  const [leak, setLeak] = useState(0);
  const dispatch = useDispatch();

  const createMemoryLeak = async () => {
    await dispatch(authenticate());
    closeModal();
    setLeak(Math.floor(Math.random()));
  }

  return (
    <div id="leaky-container">
      <div id="flex-butt">
        <div className="leak-it-div">
          <button className="leak-it" onClick={closeModal}>Close Me</button>
        </div>
        <div className="leak-it-div">
          <button className="leak-it" onClick={createMemoryLeak}>Memory Leak</button>
        </div>
        <div>{leak}</div>
      </div>
    </div>
  );
}
