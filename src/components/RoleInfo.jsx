export default function RoleInfo({ info }) {
  return (
    <section className="role-info">
      <p>
        <strong>Skills:</strong>  {info.skills.join(" , ")}
      </p>

      <p>
        <strong>Davomiyligi:</strong>  {info.duration}
      </p>

      <p>
        <strong>Turi:</strong>  {info.type}
      </p>
    </section>
  );
}