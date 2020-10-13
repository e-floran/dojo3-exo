COMPONENTS :

<App>

  <Menu>
    <Button></Button>
    <Links>
      <LinkName title="Inbox" unread="2"/>[]
      <h1>LABELS</h1>
      <Label color="orange" title="Personal">[]
    </Links>
  </Menu>

  <Mails>
    <Mail author="John Doe" mailTitle="read this" contentPreview="first line of my email" read=true img="....png"></Mail>
  </Mails>
  
  <Preview dataMail={}>
    <PreviewHeader>
        <HeaderTitle mailTitle="read this" author="John Doe" date="109287654"></HeaderTitle>
        <HeaderButtons buttonText="Reply"></HeaderButtons>
    </PreviewHeader>
    <PreviewBody author="John Doe"> Lorem ezufiihezufez {props.author}</PreviewBody>
  </Preview>

</App>
