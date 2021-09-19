const List = ({ list, users }) => {
  console.log('list :>> ', list)
  return (
    <div>
      {list.map(project => (
        <div key={project.id}>
          <span>{project.name}</span>
          <span>
            {users.find(user => user.id === project.personId)?.name || 'none'}
          </span>
        </div>
      ))}
    </div>
  )
}

export default List
