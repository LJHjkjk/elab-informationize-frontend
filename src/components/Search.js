import { Container, Row,Figure,Image, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';
import { useState } from 'react';
import Fuse from 'fuse.js';
import isEqual from 'lodash/isEqual';
import { Avatar } from './Image';

import { VerticalPlaceholder } from './Placeholder';
class UserItem{
  static Show({item}){
    return(
      <Row>
        <Col className='col-2'><Avatar src={item.avatar} size={36} /></Col>
        <Col >
        <Row><VerticalPlaceholder height={0.4}/></Row>
        {item.name}
        </Col>
      </Row>
    )
  }
  static SearchKey(){
    return ['name','id']
  }
}


function Item({item,ShowItem,addSelected,isSelect}){
  function addSelectClosure(event){
    addSelected(item,event)
  }
  return(
      <Row className='d-flex align-items-center justify-content-center'>
        <Col className='col-1'>
          <Form.Check
            type="checkbox"
            // label={<ShowItem item={item}/>}
            checked={isSelect}
            onChange={addSelectClosure}
            className='my-3'
          />
        </Col>
        <Col>
          <ShowItem item={item}/>
        </Col>

      </Row>
  )
}

function SearchBox({ModifyOnSearch}){
  return(
    <Container>
      <Row>
        <Form.Control type="text" placeholder='搜索' onChange={ModifyOnSearch}/>
      </Row>
    </Container>
  )
}


function SelectItems({show,items,close,finishedSelect,ShowItem,preselected=[]}){
    //users储存所有的可选用户信息，当确定选择后调用selected

    const [selectedItems,setSelectedItems]=useState(preselected)
    const [onSearch,setOnSearch]=useState('')
    const [isAllSelect,setIsAllSelect]=useState(false)


    const options={
      keys:ShowItem.SearchKey()
    }
    const fuse = new Fuse(items, options);

    function addSeletedItem(newItem,event){
      if(event.target.checked){
        if(!selectedItems.find((item)=>isEqual(item,newItem)))
          setSelectedItems(selectedItems=>[...selectedItems,newItem])
      }else{
        if(selectedItems.find((item)=>isEqual(item,newItem)))
          setSelectedItems(selectedItems=>selectedItems.filter(item=>!isEqual(item,newItem)))
      }
    }

    function modifyOnSearch(event){
      setOnSearch(event.target.value)
    }

    function allSelect(event){
      if(event.target.checked){
        setSelectedItems([...items])
        setIsAllSelect(true)
      }else{
        setIsAllSelect(false)
        setSelectedItems([])
      }
    }

    function finishedSelectClosure(event){
      finishedSelect(event,selectedItems)
    }


    return (
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal show={show} onHide={close} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>选择对象</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <Container>
              <Row>
                <Col className='col-6'>
                  <Card>
                    <Card.Header>
                    <Form.Check
                      type="checkbox"
                      label={'全部选择'}
                      checked={isAllSelect}
                      onChange={allSelect}
                    />
                    </Card.Header>
                    <Card.Body>
                      <Container>
                      <br/>
                        {items.map(item=>
                          <Item
                          item={item}
                          ShowItem={ShowItem.Show}
                          addSelected={addSeletedItem}
                          isSelect={selectedItems.find((e)=>isEqual(e,item))?true:false}
                          />
                        )}
                      <br/>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='col-6'>
                  <Card>
                      <Card.Header>
                        <Row>
                          <SearchBox ModifyOnSearch={modifyOnSearch}/>
                        </Row>
                      </Card.Header>
                      <Card.Body>
                        { onSearch==''?<br/>:
                          fuse.search(onSearch).map(item=>
                            <Item
                            item={item.item}
                            ShowItem={ShowItem.Show}
                            addSelected={addSeletedItem}
                            isSelect={selectedItems.find((e)=>isEqual(e,item.item))?true:false}
                            />
                          )
                        }
                      </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={finishedSelectClosure}>确定</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

export default SelectItems
export {SearchBox,UserItem}