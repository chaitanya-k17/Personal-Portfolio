import { useRouter } from 'next/router';
import { RESUME_TYPE, RESUME_TYPE_LIST } from '../../components/resume/genral';




const ResumeTypes = () => {
  const router = useRouter();

  const handleSelectType = (type: RESUME_TYPE) => {
    router.push(`/resume/showResume?type=${type}`);
  };

  return (
    <div>
      <h1>Select a Type</h1>
      <ul>
        {RESUME_TYPE_LIST.map((type) => (
          <li key={type}>
            <button onClick={() => handleSelectType(type)}>{type}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeTypes;
