import React from "react";

// Components
import { InvoiceLayout } from "@/app/components";

// Helpers
import { formatNumberWithCommas, isDataUrl } from "@/lib/helpers";

// Variables
import { DATE_OPTIONS } from "@/lib/variables";

// Types
import { InvoiceType } from "@/types";

const InvoiceTemplate = (data: InvoiceType) => {
	const { sender, receiver, details } = data;

	return (
		<InvoiceLayout data={data}>
			{/* Header — Carrier identity + Invoice title */}
			<div className='flex justify-between items-start border-b-2 border-green-500 pb-4 mb-6'>
				<div>
					{details.invoiceLogo && (
						<img
							src={details.invoiceLogo}
							width={140}
							height={100}
							alt={`Logo of ${sender.name}`}
							className='mb-2'
						/>
					)}
					<h1 className='text-xl font-bold text-gray-900'>{sender.name}</h1>
					{(sender as any).mcNumber && (
						<p className='text-xs text-gray-500' style={{ fontFamily: "monospace" }}>
							MC# {(sender as any).mcNumber}
						</p>
					)}
					{(sender as any).dotNumber && (
						<p className='text-xs text-gray-500' style={{ fontFamily: "monospace" }}>
							DOT# {(sender as any).dotNumber}
						</p>
					)}
					<address className='mt-1 text-sm not-italic text-gray-600'>
						{sender.address}
						<br />
						{sender.city}, {sender.country} {sender.zipCode}
					</address>
					<p className='text-sm text-gray-600'>{sender.phone}</p>
					<p className='text-sm text-gray-600'>{sender.email}</p>
				</div>
				<div className='text-right'>
					<h2 className='text-3xl font-bold text-gray-800'>INVOICE</h2>
					<p className='text-lg text-gray-800 mt-1' style={{ fontFamily: "monospace" }}>
						#{details.invoiceNumber}
					</p>
					{(details as any).loadNumber && (
						<p className='text-sm text-gray-500 mt-1'>
							Load #: <span style={{ fontFamily: "monospace" }}>{(details as any).loadNumber}</span>
						</p>
					)}
				</div>
			</div>

			{/* Broker + Dates */}
			<div className='grid grid-cols-2 gap-6 mb-6'>
				<div>
					<p className='text-xs font-bold uppercase tracking-widest text-gray-400 mb-1'>Bill To</p>
					<h3 className='font-bold text-gray-900'>{receiver.name}</h3>
					<address className='text-sm not-italic text-gray-600'>
						{receiver.address && receiver.address.length > 0 ? receiver.address : null}
						{receiver.address && <br />}
						{receiver.city}, {receiver.country} {receiver.zipCode}
					</address>
					{receiver.email && <p className='text-sm text-gray-600 mt-1'>{receiver.email}</p>}
				</div>
				<div>
					<dl className='space-y-1 text-sm'>
						<div className='flex justify-between'>
							<dt className='font-semibold text-gray-700'>Invoice Date:</dt>
							<dd className='text-gray-600' style={{ fontFamily: "monospace" }}>
								{new Date(details.invoiceDate).toLocaleDateString("en-US", DATE_OPTIONS)}
							</dd>
						</div>
						<div className='flex justify-between'>
							<dt className='font-semibold text-gray-700'>Due Date:</dt>
							<dd className='text-gray-600' style={{ fontFamily: "monospace" }}>
								{new Date(details.dueDate).toLocaleDateString("en-US", DATE_OPTIONS)}
							</dd>
						</div>
						{details.purchaseOrderNumber && (
							<div className='flex justify-between'>
								<dt className='font-semibold text-gray-700'>Broker Ref #:</dt>
								<dd className='text-gray-600' style={{ fontFamily: "monospace" }}>
									{details.purchaseOrderNumber}
								</dd>
							</div>
						)}
					</dl>
				</div>
			</div>

			{/* Line Items Table */}
			<div className='mt-3'>
				<div className='border border-gray-200 p-1 rounded-lg space-y-1'>
					<div className='hidden sm:grid sm:grid-cols-5'>
						<div className='sm:col-span-2 text-xs font-medium text-gray-500 uppercase'>Description of Service</div>
						<div className='text-left text-xs font-medium text-gray-500 uppercase'>Qty</div>
						<div className='text-left text-xs font-medium text-gray-500 uppercase'>Rate</div>
						<div className='text-right text-xs font-medium text-gray-500 uppercase'>Amount</div>
					</div>
					<div className='hidden sm:block border-b border-gray-200'></div>
					<div className='grid grid-cols-3 sm:grid-cols-5 gap-y-1'>
						{details.items.map((item, index) => (
							<React.Fragment key={index}>
								<div className='col-span-full sm:col-span-2 border-b border-gray-300'>
									<p className='font-medium text-gray-800'>{item.name}</p>
									<p className='text-xs text-gray-600 whitespace-pre-line'>{item.description}</p>
								</div>
								<div className='border-b border-gray-300'>
									<p className='text-gray-800'>{item.quantity}</p>
								</div>
								<div className='border-b border-gray-300'>
									<p className='text-gray-800'>
										{item.unitPrice} {details.currency}
									</p>
								</div>
								<div className='border-b border-gray-300'>
									<p className='sm:text-right text-gray-800'>
										{item.total} {details.currency}
									</p>
								</div>
							</React.Fragment>
						))}
					</div>
					<div className='sm:hidden border-b border-gray-200'></div>
				</div>
			</div>

			{/* Totals */}
			<div className='mt-2 flex sm:justify-end'>
				<div className='sm:text-right space-y-2'>
					<div className='grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2'>
						<dl className='grid sm:grid-cols-5 gap-x-3'>
							<dt className='col-span-3 font-semibold text-gray-800'>Subtotal:</dt>
							<dd className='col-span-2 text-gray-500'>
								{formatNumberWithCommas(Number(details.subTotal))} {details.currency}
							</dd>
						</dl>
						{details.discountDetails?.amount != undefined &&
							details.discountDetails?.amount > 0 && (
								<dl className='grid sm:grid-cols-5 gap-x-3'>
									<dt className='col-span-3 font-semibold text-gray-800'>Discount:</dt>
									<dd className='col-span-2 text-gray-500'>
										{details.discountDetails.amountType === "amount"
											? `- ${details.discountDetails.amount} ${details.currency}`
											: `- ${details.discountDetails.amount}%`}
									</dd>
								</dl>
							)}
						{details.taxDetails?.amount != undefined && details.taxDetails?.amount > 0 && (
							<dl className='grid sm:grid-cols-5 gap-x-3'>
								<dt className='col-span-3 font-semibold text-gray-800'>Tax:</dt>
								<dd className='col-span-2 text-gray-500'>
									{details.taxDetails.amountType === "amount"
										? `+ ${details.taxDetails.amount} ${details.currency}`
										: `+ ${details.taxDetails.amount}%`}
								</dd>
							</dl>
						)}
						{details.shippingDetails?.cost != undefined && details.shippingDetails?.cost > 0 && (
							<dl className='grid sm:grid-cols-5 gap-x-3'>
								<dt className='col-span-3 font-semibold text-gray-800'>Shipping:</dt>
								<dd className='col-span-2 text-gray-500'>
									{details.shippingDetails.costType === "amount"
										? `+ ${details.shippingDetails.cost} ${details.currency}`
										: `+ ${details.shippingDetails.cost}%`}
								</dd>
							</dl>
						)}
						<dl className='grid sm:grid-cols-5 gap-x-3'>
							<dt className='col-span-3 font-bold text-gray-900 text-base'>Total:</dt>
							<dd className='col-span-2 font-bold text-gray-900 text-base'>
								{formatNumberWithCommas(Number(details.totalAmount))} {details.currency}
							</dd>
						</dl>
						{details.totalAmountInWords && (
							<dl className='grid sm:grid-cols-5 gap-x-3'>
								<dt className='col-span-3 font-semibold text-gray-800'>Total in words:</dt>
								<dd className='col-span-2 text-gray-500'>
									<em>
										{details.totalAmountInWords} {details.currency}
									</em>
								</dd>
							</dl>
						)}
					</div>
				</div>
			</div>

			{/* Remittance / Payment Info */}
			{details.paymentInformation?.bankName && (
				<div className='mt-6 p-4 rounded-lg border border-green-200' style={{ backgroundColor: "#f0fdf4" }}>
					<p className='text-xs font-bold uppercase tracking-widest text-green-600 mb-2'>Remittance Information</p>
					<p className='text-sm text-gray-800'>Bank: {details.paymentInformation.bankName}</p>
					<p className='text-sm text-gray-800'>Account: {details.paymentInformation.accountName}</p>
					<p className='text-sm text-gray-800' style={{ fontFamily: "monospace" }}>
						Account #: {details.paymentInformation.accountNumber}
					</p>
				</div>
			)}

			{/* Notes + Terms */}
			<div className='mt-4 grid grid-cols-2 gap-4 text-sm'>
				<div>
					<p className='font-semibold text-green-600'>Payment Terms:</p>
					<p className='text-gray-800'>{details.paymentTerms}</p>
				</div>
				{details.additionalNotes && (
					<div>
						<p className='font-semibold text-green-600'>Notes:</p>
						<p className='text-gray-800'>{details.additionalNotes}</p>
					</div>
				)}
			</div>

			{/* Contact */}
			<div className='mt-4'>
				<p className='text-gray-500 text-sm'>
					Questions about this invoice? Contact:
				</p>
				<div>
					<p className='text-sm font-medium text-gray-800'>{sender.email}</p>
					<p className='text-sm font-medium text-gray-800'>{sender.phone}</p>
				</div>
			</div>

			{/* Signature */}
			{details?.signature?.data && isDataUrl(details?.signature?.data) ? (
				<div className='mt-6'>
					<p className='font-semibold text-gray-800'>Signature:</p>
					<img
						src={details.signature.data}
						width={120}
						height={60}
						alt={`Signature of ${sender.name}`}
					/>
				</div>
			) : details.signature?.data ? (
				<div className='mt-6'>
					<p className='text-gray-800'>Signature:</p>
					<p
						style={{
							fontSize: 30,
							fontWeight: 400,
							fontFamily: `${details.signature.fontFamily}, cursive`,
							color: "black",
						}}
					>
						{details.signature.data}
					</p>
				</div>
			) : null}
		</InvoiceLayout>
	);
};

export default InvoiceTemplate;
