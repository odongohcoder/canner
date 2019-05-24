// @flow

import * as React from 'react';
import { Row, Col } from 'antd';
import { Item } from 'canner-helpers';

type Props = {
  id: string,
  title: string,
  description: string,
  name: string,
  routes: Array<string>,
  align: string,
  gutter: number,
  justify: string,
  type: string,
  renderChildren: Function,
  refId: any,
  style: Object,
  childrenNode: Array<Object>
};

export default function RowLayout({
  align, gutter, justify, type, style, childrenNode,
}: Props) {
  return (
    <Row
      align={align}
      gutter={gutter}
      justify={justify}
      type={type}
      style={style}
    >
      {
      childrenNode.map((child, index) => {
        const {
          offset, order, pull, push, span, xs, sm, md, lg, xl, xxl, style,
        } = child;
        if (child.nodeType === 'layout.col') {
          return (
            <Col
              key={index}
              offset={offset}
              order={order}
              pull={pull}
              push={push}
              span={span}
              xs={xs}
              sm={sm}
              m={md}
              lg={lg}
              xl={xl}
              xxl={xxl}
              style={style}
            >
              <Item
                filter={(node, i) => (i === index)}
              />
            </Col>
          );
        }
        return (
          <Item
            filter={(node, i) => (i === index)}
          />
        );
      })
    }
    </Row>
  );
}
