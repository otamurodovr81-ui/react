const roles = ["Frontend", "Backend", "Menejer", "Tester"];

export default function RoleMenu({ selectedRole, onSelect }) {
    return <>
    <nav className="role-menu">
      {roles.map((role) => (
        <button
          key={role}
          className={selectedRole === role ? "active" : ""}
          onClick={() => onSelect(role)}
        >
          {role}
        </button>
      ))}
    </nav>
  </>
  
}