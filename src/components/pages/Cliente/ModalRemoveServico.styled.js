import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  max-width: 450px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div`
  padding: 20px 24px 16px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    color: #d32f2f;
    font-size: 1.5rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #999;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    color: #666;
  }
`;

export const ModalBody = styled.div`
  padding: 20px 24px;
  text-align: center;

  p {
    margin: 10px 0;
    color: #666;
    font-size: 1rem;
  }

  strong {
    color: #d32f2f;
  }
`;

export const ModalFooter = styled.div`
  padding: 16px 24px 24px;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

export const WarningIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 16px;
`;

export const ServiceInfo = styled.div`
  background: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  margin: 20px 0;
  text-align: left;

  h3 {
    margin: 0 0 8px 0;
    color: #333;
    font-size: 1.1rem;
  }

  p {
    margin: 0 0 12px 0;
    color: #666;
    font-size: 0.9rem;
  }

  .price {
    background: #2c5aa0;
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

export const Button = styled.button`
  background: #d32f2f;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;

  &:hover:not(:disabled) {
    background: #b71c1c;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

export const CancelButton = styled.button`
  background: transparent;
  color: #666;
  border: 2px solid #ddd;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;

  &:hover {
    background: #f5f5f5;
    border-color: #bbb;
  }
`;
