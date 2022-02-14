import React, { FC, useState, useEffect } from 'react';
import { ActiveMirrorSession } from '../../utils/data';
import { ICaptureSet, IMirroSession } from '../../utils/types';
import './ViewMirrorSessions.css';
import { useParams } from 'react-router-dom';

interface Props {}
export const ViewMirrorSessions: FC<Props> = () => {
	const [mirrorSessionData, setMirrorSessionData] = useState<IMirroSession>();
	const [selectedSet, setSelectSet] = useState(0);
	const { id } = useParams();

	useEffect(() => {
		console.log({ id });
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				setMirrorSessionData(ActiveMirrorSession);
			});
	}, []);
	const updateState = (newState: any) => {
		if (mirrorSessionData) {
			setMirrorSessionData({
				...mirrorSessionData,
				...newState,
			});
		}
	};
	return mirrorSessionData ? (
		<div className='ViewMirrorSessions'>
			<div>
				<h3>View Packet Mirroring Session</h3>
			</div>
			<div className='MirroSessionContainer ViewMirrorSessionsTop '>
				<div>
					<label htmlFor='#accountID' className='Label'>
						Account ID
					</label>
					<select
						id='accountID'
						value={mirrorSessionData?.account}
						onChange={(e) => {
							updateState({ account: e.target.value });
						}}
					>
						<option value='saab'>Saab</option>
						<option value='opel'>Opel</option>
						<option value='audi'>Audi</option>
					</select>
				</div>
				<div>
					<label htmlFor='#vpcID' className='Label'>
						VPC ID
					</label>
					<input
						id='vpcID'
						placeholder='VPC ID'
						type='text'
						value={mirrorSessionData?.vpc}
						onChange={(e) => {
							updateState({ vpc: e.target.value });
						}}
					/>
				</div>
			</div>
			<div className='MirroSessionContainer'>
				<div className='TabButtons'>
					{mirrorSessionData?.captureSets.map((item, index) => {
						return (
							<button
								key={item.remoteIps}
								className={`Button ${
									index === selectedSet ? 'ActiveButton' : ''
								}`}
								onClick={() => {
									setSelectSet(index);
								}}
							>
								Capture Set {index + 1}
							</button>
						);
					})}
				</div>
				{mirrorSessionData?.captureSets.map((item, index) => {
					return (
						<div key={item.ec2Instance}>
							<CaptureSet
								captureSet={item}
								currentSet={index}
								selectedSet={selectedSet}
							/>
						</div>
					);
				})}
			</div>
		</div>
	) : (
		<div></div>
	);
};

export const CaptureSet = (props: {
	captureSet: ICaptureSet;
	selectedSet: number;
	currentSet: number;
}) => {
	const { captureSet, currentSet, selectedSet } = props;
	if (selectedSet !== currentSet) {
		return <></>;
	}
	return (
		<div className=''>
			<div>
				<label htmlFor='#ec2' className='Label'>
					Account ID
				</label>
				<select id='ec2' value={captureSet.ec2Instance} onChange={() => {}}>
					<option value='saab'>Saab</option>
					<option value='opel'>Opel</option>
					<option value='audi'>Audi</option>
				</select>
			</div>
			<div>
				<label htmlFor='#remoteIps' className='Label'>
					Remote IPs
				</label>
				<input
					id='remoteIps'
					placeholder='Remote IPs'
					type='text'
					value={captureSet.remoteIps}
					onChange={(e) => {}}
				/>
			</div>
			<div>
				<label htmlFor='#vpcID' className='Label'>
					Requestor
				</label>
				<input
					id='vpcID'
					placeholder='Requestor'
					type='text'
					value={captureSet?.requestor}
					onChange={(e) => {}}
				/>
			</div>
		</div>
	);
};
