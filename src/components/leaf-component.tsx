type LeafComponentProps = {
  children: React.ReactNode,
}

export const LeafComponent = ( { children }: LeafComponentProps ) => {

  return (
    <div className="rounded-full">
      {children}
    </div>
  )
}
