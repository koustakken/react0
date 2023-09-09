import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

import styles from './NewsCard.modules.scss';

export const NewsCard = ({ data }: any) => {
	return (
		<div className={styles.container}>
			{
				data.map((obj: any, index: number) => (
					<Card
						key={index}
						style={{ width: 400 }}
						cover={
							<img
								alt='image'
								src={obj.urlToImage}
							/>
						}
					>
						<Meta
							title={obj.title}
							description={obj.description}
						/>
					</Card>
				))
			}
		</div>
	)
}
